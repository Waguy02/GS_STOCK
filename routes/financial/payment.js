const express = require('express');
const router = express.Router();

// Item Model

const Payment = require('../../models/manager');




// @route   GET api/manager
// @desc    Get All manager
// @access  Public
router.get('/', (req, res) => {
    Payment.find()
        .populate('product_command')
        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

// @route   GET api/manager
// @desc    Get one manager
// @access  Public
router.get('/:id', (req, res) => {
    Payment.findById(req.params.id)

        .populate('product_command')
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
                message: "Error retrieving manager with id " + req.params.id
            });
        });
});

//@route POST api/manager
//@desc Create an manager
//@access Public
router.post("/", (req, res) => {


    const data = new Payment({
        date:req.body.date,
        amout:req.body.amount,
        product_command:req.body.command,
        status:req.body.status

    });
    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Payment."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/managers
//@desc Create an manager
//@access Public
router.put("/:id", (req, res) => {

    Payment.findByIdAndUpdate(req.params.id, {
        date:req.body.date,
        amout:req.body.amount,
        product_command:req.body.command,
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
                message: "Error updating manager with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/manager:id
//@desc Delete an manager
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

