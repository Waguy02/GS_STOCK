const express = require('express');
const router = express.Router();

var CryptoJS = require("crypto-js");
// Item Model

const Payment = require('../../models/payment');




// @route   GET api/payment
// @desc    Get All payment
// @access  Public
router.get('/', (req, res) => {
    Payment.find()
        .populate('product_command')
        .populate('sale')
        .populate('manager')
        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

router.get('/command/:command', (req, res) => {

        Payment.find({product_command: req.params.command}).populate('manager')
        .then(data =>{ res.json((data))})
        .catch(err => console.log(err));
});


router.get('/sale/:sale', (req, res) => {

    Payment.find({sale: req.params.sale}).populate('manager')
        .then(data =>{ res.json((data))})
        .catch(err => console.log(err));
});




// @route   GET api/payment
// @desc    Get one payment
// @access  Public
router.get('/:id', (req, res) => {
    Payment.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Payment not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Payment not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving payment with id " + req.params.id
            });
        });
});

//@route POST api/payment
//@desc Create an payment
//@access Public









router.post("/", (req, res) => {


    const data = new Payment({
        date: req.body.date,
        amount:req.body.amount,
        manager:req.body.manager,
        payemnt_status:req.body.payment_status,
        sale:req.body.sale,
        product_command:req.body.product_command,
        status:true

    });
    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            console.log(err);
        res.status(500).send({

            message: err.message || "Some error occurred while creating the Payment."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/payments
//@desc Create an payment
//@access Public
router.put("/:id", (req, res) => {

    Payment.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        password: req.body.password,
        status:req.body.status

    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Payment not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Payment not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating payment with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/payment:id
//@desc Delete an payment
//@access Public
router.delete("/:id", (req, res) => {
    Payment.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;

