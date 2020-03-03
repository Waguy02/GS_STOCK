const express = require('express');
const router = express.Router();

// Item Model

const Product = require('../../models/product');




// @route   GET api/product
// @desc    Get All product
// @access  Public
router.get('/', (req, res) => {
    Product.find()
        .populate('category')
        .sort({ date_semis: 1 })
        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

// @route   GET api/product
// @desc    Get one product
// @access  Public
router.get('/:id', (req, res) => {
    Product.findById(req.params.id)
        .populate('category')

        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving product with id " + req.params.id
            });
        });
});

//@route POST api/product
//@desc Create an product
//@access Public
router.post("/", (req, res) => {


    const data = new Product({
        name: req.body.name,
        description:req.body.description,
        category:req.body.category,
        unit_price:req.body.unit_price,
        status:req.body.status

    });
    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Product."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/products
//@desc Create an product
//@access Public
router.put("/:id", (req, res) => {

    Product.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description:req.body.description,
        category:req.body.category,
        unit_price:req.body.unit_price,
        status:req.body.status

    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Product not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating product with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/product:id
//@desc Delete an product
//@access Public
router.delete("/:id", (req, res) => {
    Product.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;

