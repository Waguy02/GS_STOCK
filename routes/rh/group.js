const express = require('express');
const router = express.Router();

// Item Model

const Group = require('../../models/group');




// @route   GET api/group
// @desc    Get All group
// @access  Public
router.get('/', (req, res) => {
  Group.find()
    
    .sort({ date_semis: 1 })
    .then(data => res.json((data)))
    .catch(err => console.log(err));
});

// @route   GET api/group
// @desc    Get one group
// @access  Public
router.get('/:id', (req, res) => {
    Group.findById(req.params.id)
    
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "Group not found with id " + req.params.id
            });            
        }
        res.json(data)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Group not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving group with id " + req.params.id
        });
    });
});

//@route POST api/group
//@desc Create an group
//@access Public
router.post("/", (req, res) => {


            const data = new Group({
                description:req.body.description,
                code_createur:req.body.code_createur,
                code: req.body.code,
                name: req.body.name,
                date_creation:req.body.date_creation,
                statut: req.body.statut,
              });
              data.save()
                .then(data => {
                  res.json(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the Group."
                    });
                

        })
        .catch(err =>console.log(err)
        )
  });

//@route POST api/groups
//@desc Create an group
//@access Public
router.put("/:id", (req, res) => {
    
            Group.findByIdAndUpdate(req.params.id, {
                description:req.body.description,
                code_createur:req.body.code_createur,
                code: req.body.code,
                name: req.body.name,
                date_creation:req.body.date_creation,
                statut: req.body.statut,
            }, {new: true})
            .then(data => {
                if(!data) {
                    return res.status(404).send({
                        message: "Group not found with id " + req.params.id
                    });
                }
                res.json(data);
            })
            .catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "Group not found with id " + req.params.id
                    });                
                }
                return res.status(500).send({
                    message: "Error updating group with id " + req.params.id
                });
            

        })
        .catch(err =>console.log(err)
        )
  });

//@route DELETE api/group:id
//@desc Delete an group
//@access Public
router.delete("/:id", (req, res) => {
    Group.findById(req.params.id)
      .then(data =>
        data
          .remove()
          .then(data => res.json(data))
          .catch(err => res.json({ success: false }))
      )
      .catch(err => res.status(404).json({ success: false }));
  });
module.exports = router;

