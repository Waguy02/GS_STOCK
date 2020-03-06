const express = require('express');
const router = express.Router();

// Item Model

const ProductCommand = require('../../models/product_command');




// @route   GET api/product_command
// @desc    Get All product_command
// @access  Public
router.get('/', (req, res) => {
    ProductCommand.find()
        .populate('manager')
        .populate('provider')

        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

// @route   GET api/product_command
// @desc    Get one product_command
// @access  Public
router.get('/:id', (req, res) => {
    ProductCommand.findById(req.params.id)
        .populate('manager')
        .populate('provider')
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "ProductCommand not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "ProductCommand not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving product_command with id " + req.params.id
            });
        });
});

//@route POST api/product_command
//@desc Create an product_command
//@access Public
router.post("/", (req, res) => {


    const data = new ProductCommand({
        name: req.body.name,
        date_initiating: req.body.date_initiating,
        date_finalizing:req.body.date_finalizing,
        manager:req.body.manager,
        provider:req.body.provider,
        status:req.body.status

    });
    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the ProductCommand."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/product_commands
//@desc Create an product_command
//@access Public
router.put("/:id", (req, res) => {

    ProductCommand.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        date_initiating: req.body.date_initiating,
        date_finalizing:req.body.date_finalizing,
        manager:req.body.manager,
        provider:req.body.provider,
        status:req.body.status

    }, {new: true})

        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "ProductCommand not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "ProductCommand not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating product_command with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/product_command:id
//@desc Delete an product_command
//@access Public
router.delete("/:id", (req, res) => {
    ProductCommand.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;

