const express = require('express');
const router = express.Router();

// Item Model

const UserGroup = require('../../models/user_group');




// @route   GET api/user_group
// @desc    Get All user_group
// @access  Public
router.get('/', (req, res) => {
  UserGroup.find()
    
    .sort({ date_semis: 1 })
    .then(data => res.json((data)))
    .catch(err => console.log(err));
});

// @route   GET api/user_group
// @desc    Get one user_group
// @access  Public
router.get('/:id', (req, res) => {
    UserGroup.findById(req.params.id)
    
    .then(data => {
        if(!data) {
            return res.status(404).send({
                message: "UserGroup not found with id " + req.params.id
            });            
        }
        res.json(data)
    })
    .catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "UserGroup not found with id " + req.params.id
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user_group with id " + req.params.id
        });
    });
});






router.get("/user/:user",(req,res)=>{

    UserGroup.find().where("user").equals(req.params.user).then(data=>res.json(data)).catch(err=>res.json(err));

})


router.get("/group/:group",(req,res)=>{
  
    UserGroup.find()
    .where("group").equals(req.params.group).then(data=>res.json(data)).catch(err=>res.json(err));

})











//@route POST api/user_group
//@desc Create an user_group
//@access Public
router.post("/", (req, res) => {

    console.log("Création de la relation utilisateur/ groupe");
    
            const data = new UserGroup({
                user:req.body.user,
                group:req.body.group,
                code: req.body.code,
                statut: req.body.statut,
              });
              data.save()
                .then(data => {
                  res.json(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while creating the UserGroup."
                    });
                

        })
        .catch(err =>console.log(err)
        )
  });

//@route POST api/user_groups
//@desc Create an user_group
//@access Public
router.put("/:id", (req, res) => {
    
    console.log("Mise à jour de la relation Utilisateur groupe");
    
            UserGroup.findByIdAndUpdate(req.params.id, {
                user:req.body.user,
                group:req.body.group,
                code: req.body.code,
                statut: req.body.statut,
            }, {new: true})
            .then(data => {
                console.log(data);
                if(!data) {
                    return res.status(404).send({
                        message: "UserGroup not found with id " + req.params.id
                    });
                }
                res.json(data);
            })
            .catch(err => {
                if(err.kind === 'ObjectId') {
                    return res.status(404).send({
                        message: "UserGroup not found with id " + req.params.id
                    });                
                }
                return res.status(500).send({
                    message: "Error updating user_group with id " + req.params.id
                });
            

        })
        .catch(err =>console.log(err)
        )
  });

//@route DELETE api/user_group:id
//@desc Delete an user_group
//@access Public
router.delete("/:id", (req, res) => {
    UserGroup.findById(req.params.id)
      .then(data =>
        {
            console.log("Suppression de la relation utilisateur/groupe");       
        data
          .remove()
          .then(data => res.json(data))
          .catch(err => res.json({ success: false })) }
      )
      .catch(err => res.status(404).json({ success: false }));
  });
module.exports = router;

