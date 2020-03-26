const express = require('express');
const router = express.Router();

// Item Model

const Category = require('../../models/category');




// @route   GET api/category
// @desc    Get All category
// @access  Public
router.get('/', (req, res) => {
    Category.find(

        {"name":{"$regex":req.query.name,"$options":"i"},
            }
    )

        .sort({ date_semis: 1 })
        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

// @route   GET api/category
// @desc    Get one category
// @access  Public
router.get('/:id', (req, res) => {
    Category.findById(req.params.id)

        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving category with id " + req.params.id
            });
        });
});

//@route POST api/category
//@desc Create an category
//@access Public
router.post("/", (req, res) => {


    const data = new Category({
        name: req.body.name,
        description:req.body.description,
        status:req.body.status

    });


    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
            console.log(err);
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Category."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/categorys
//@desc Create an category
//@access Public
router.put("/:id", (req, res) => {

    Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        description:req.body.description,
        status:req.body.status

    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Category not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating category with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/category:id
//@desc Delete an category
//@access Public
router.delete("/:id", (req, res) => {
    Category.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;

