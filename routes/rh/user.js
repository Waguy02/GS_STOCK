const express = require('express');
const router = express.Router();

// Item Model

const User = require('../../models/user');




// @route   GET api/user
// @desc    Get All user
// @access  Public
router.get('/', (req, res) => {
  User.find()
    
    .sort({ date_semis: 1 })
    .then(data => res.json((data)))
    .catch(err => console.log(err));
});

// @route   GET api/user
// @desc    Get one user
// @access  Public
router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });            
        }
        res.json(data)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "User not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.id
        });
    });
});

//@route POST api/user
//@desc Create an user
//@access Public
router.post("/", (req, res) => {


            const data = new User({

                code: req.body.code,
                name: req.body.name,
                adresse: req.body.adresse,
                sexe: req.body.sexe,
                date_naissance: req.body.date_naissance,
                niveau: req.body.niveau,
                code_createur: req.body.code_createur,
                date_creation: req.body.date_creation,
                date_modification: req.body.date_modification,
                statut: req.body.statut,
              });
              data.save()
                .then(data => {
                  res.json(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the User."
                    });
                

        })  
        .catch(err =>console.log(err)
        )
  });

//@route POST api/users
//@desc Create an user
//@access Public
router.put("/:id", (req, res) => {
    
            User.findByIdAndUpdate(req.params.id, {
                code: req.body.code,
                name: req.body.name,
                adresse: req.body.adresse,
                sexe: req.body.sexe,
                date_naissance: req.body.date_naissance,
                niveau: req.body.niveau,
                code_createur: req.body.code_createur,
                date_creation: req.body.date_creation,
                date_modification: req.body.date_modification,
                statut: req.body.statut,
            }, {new: true})
            .then(data => {
                if(!data) {
                    return res.status(404).send({
                        message: "User not found with id " + req.params.id
                    });
                }
                res.json(data);
            })
            .catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "User not found with id " + req.params.id
                    });                
                }
                return res.status(500).send({
                    message: "Error updating user with id " + req.params.id
                });
            

        })
        .catch(err =>console.log(err)
        )
  });

//@route DELETE api/user:id
//@desc Delete an user
//@access Public
router.delete("/:id", (req, res) => {
    User.findById(req.params.id)
      .then(data =>
        data
          .remove()
          .then(data => res.json(data))
          .catch(err => res.json({ success: false }))
      )
      .catch(err => res.status(404).json({ success: false }));
  });
module.exports = router;

