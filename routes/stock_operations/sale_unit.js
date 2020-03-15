const express = require('express');
const router = express.Router();

// Item Model

const SaleUnit = require('../../models/sale_unit');




// @route   GET api/sale_unit
// @desc    Get All sale_unit
// @access  Public
router.get('/:sale', (req, res) => {

    SaleUnit.find({sale:req.params.sale})

        .populate('product_class')
        .deepPopulate('product_class.product')
        .then(data =>{ res.json((data))})
        .catch(err => console.log(err));
});


router.get('/product_class/:id', (req, res) => {

    SaleUnit.find({product_class:req.params.id})

        .populate('product_class')
        .populate('sale')
        .deepPopulate(['product_class.product','sale.customer'])

        .then(data =>{
            var result=[];
            for(var su of data)if(su.sale&&su.sale.status==true)result.push(su);
            res.json((result))})
        .catch(err => console.log(err));
});












// @route   GET api/sale_unit
// @desc    Get one sale_unit
// @access  Public
router.get('/:id', (req, res) => {
    SaleUnit.findById(req.params.id)
        .populate('sale')
        .populate('product_class')
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "SaleUnit not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "SaleUnit not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving sale_unit with id " + req.params.id
            });
        });
});

//@route POST api/sale_unit
//@desc Create an sale_unit
//@access Public
router.post("/", (req, res) => {


    const data = new SaleUnit({
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
            message: err.message || "Some error occurred while creating the SaleUnit."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/sale_units
//@desc Create an sale_unit
//@access Public
router.put("/:id", (req, res) => {

    SaleUnit.findByIdAndUpdate(req.params.id, {
        quantity:req.body.quantity,
        unit_price:req.body.unit_price,
        date_delivrance: req.body.date_delivrance,
        product_class: req.body.product_class,
        status:req.body.status

    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "SaleUnit not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "SaleUnit not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating sale_unit with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/sale_unit:id
//@desc Delete an sale_unit
//@access Public
router.delete("/:id", (req, res) => {
    SaleUnit.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;

