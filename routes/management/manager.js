const express = require('express');
const router = express.Router();

var CryptoJS = require("crypto-js");
// Item Model

const Manager = require('../../models/manager');




// @route   GET api/manager
// @desc    Get All manager
// @access  Public
router.get('/', (req, res) => {
    Manager.find()
        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

// @route   GET api/manager
// @desc    Get one manager
// @access  Public
router.get('/:id', (req, res) => {
    Manager.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Manager not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Manager not found with id " + req.params.id
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

router.post("/auth/",(req,res)=> {

        var name = req.body.name;
        var password = req.body.password;
        var key = req.body.key;
        Manager.find().then(data => {

            if (data.length == 0) {
                //Création d'un utilisateur par défaut ;
                let admin = new Manager();
                admin.name = "admin";
                admin.password = CryptoJS.AES.encrypt("admin", key).toString();
                admin.save().then(data => res.json(data)).catch(err => res.status(500).json(err));
            } else {
                Manager.find({name: name}).then(
                    data => {
                        var result = new Array();

                        for (var manager of data) {


                            if (CryptoJS.AES.decrypt(manager.password, key).toString(CryptoJS.enc.Utf8) == CryptoJS.AES.decrypt(password, key).toString(CryptoJS.enc.Utf8)) {
                                result.push(manager);

                            }
                        }

                        res.json(result);


                    }).catch(err => {
                        res.status(500).send({
                            message: err.message || "Error while authenticating."
                        });


                    }
                )
            }


        })

    }
)



router.post("/", (req, res) => {

    console.log("Enregistrement d'utilisateur");

    const data = new Manager({
        name: req.body.name,
        password: req.body.password,
        status:req.body.status

    });
    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Manager."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/managers
//@desc Create an manager
//@access Public
router.put("/:id", (req, res) => {

    Manager.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        password: req.body.password,
        status:req.body.status

    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Manager not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Manager not found with id " + req.params.id
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
        Manager.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
module.exports = router;

