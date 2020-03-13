const express = require('express');
const router = express.Router();

// Item Model

const ProductCommandUnit = require('../../models/product_command_unit');




// @route   GET api/product_command_unit
// @desc    Get All product_command_unit
// @access  Public
router.get('/:command', (req, res) => {

    ProductCommandUnit.find({product_command:req.params.command})

        .populate('product_class')
        .deepPopulate('product_class.product')
        .then(data =>{ res.json((data))})
        .catch(err => console.log(err));
});

// @route   GET api/product_command_unit
// @desc    Get one product_command_unit
// @access  Public
router.get('/:id', (req, res) => {
    ProductCommandUnit.findById(req.params.id)
        .populate('product_command')
        .populate('product_class')
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "ProductCommandUnit not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "ProductCommandUnit not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving product_command_unit with id " + req.params.id
            });
        });
});

//@route POST api/product_command_unit
//@desc Create an product_command_unit
//@access Public
router.post("/", (req, res) => {


    const data = new ProductCommandUnit({
        quantity:req.body.quantity,
        unit_price:req.body.unit_price,
        date_delivrance: req.body.date_delivrance,
        product_class: req.body.product_class,
        status:req.body.status

    });
    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the ProductCommandUnit."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/product_command_units
//@desc Create an product_command_unit
//@access Public
router.put("/:id", (req, res) => {

    ProductCommandUnit.findByIdAndUpdate(req.params.id, {
        quantity:req.body.quantity,
        unit_price:req.body.unit_price,
        date_delivrance: req.body.date_delivrance,
        product_class: req.body.product_class,
        status:req.body.status

    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "ProductCommandUnit not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "ProductCommandUnit not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating product_command_unit with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/product_command_unit:id
//@desc Delete an product_command_unit
//@access Public
router.delete("/:id", (req, res) => {
    ProductCommandUnit.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;

