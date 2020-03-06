const express = require('express');
const router = express.Router();

// Item Model

const ProductClass = require('../../models/product_class');




// @route   GET api/product_class
// @desc    Get All product_class
// @access  Public
router.get('/', (req, res) => {
    ProductClass.find()
        .populate('product')
        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

// @route   GET api/product_class
// @desc    Get one product_class
// @access  Public
router.get('/:id', (req, res) => {
    ProductClass.findById(req.params.id)

        .populate('product')
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "ProductClass not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "ProductClass not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving product_class with id " + req.params.id
            });
        });
});

//@route POST api/product_class
//@desc Create an product_class
//@access Public
router.post("/", (req, res) => {

    console.log("Creating new productClass")
    const data = new ProductClass({
        unit_price:req.body.unit_price,
        label:req.body.label,
        date_intrance: req.body.date_intrance,
        quantity:req.body.quantity,
        product:req.body.product,
        status:req.body.status

    });
    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
        console.log(err);
        res.status(500).send({
            message: err.message || "Some error occurred while creating the ProductClass."

        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/product_classs
//@desc Create an product_class
//@access Public
router.put("/:id", (req, res) => {

    ProductClass.findByIdAndUpdate(req.params.id, {
        unit_price:req.body.unit_price,
        label:req.body.label,
        quantity:req.body.quantity,
        product:req.body.product,
        date_intrance: req.body.date_intrance,
        status:req.body.status

    }, {new: true})

        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "ProductClass not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "ProductClass not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating product_class with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/product_class:id
//@desc Delete an product_class
//@access Public
router.delete("/:id", (req, res) => {
    ProductClass.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;

