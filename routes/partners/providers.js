const express = require('express');
const router = express.Router();

// Item Model

const Provider = require('../../models/provider');




// @route   GET api/provider
// @desc    Get All provider
// @access  Public
router.get('/', (req, res) => {
    Provider.find(
        {"name":{"$regex":req.query.name,"$options":"i"}}

        )
        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

// @route   GET api/provider
// @desc    Get one provider
// @access  Public
router.get('/:id', (req, res) => {
    Provider.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Provider not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Provider not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving provider with id " + req.params.id
            });
        });
});

//@route POST api/provider
//@desc Create an provider
//@access Public
router.post("/", (req, res) => {


    const data = new Provider({
        name: req.body.name,
        status:req.body.status

    });
    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Provider."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/providers
//@desc Create an provider
//@access Public
router.put("/:id", (req, res) => {

    Provider.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        status:req.body.status

    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Provider not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Provider not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating provider with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/provider:id
//@desc Delete an provider
//@access Public
router.delete("/:id", (req, res) => {
    Provider.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;

