const express = require('express');
const router = express.Router();

// Item Model

const Customer = require('../../models/customer');




// @route   GET api/customer
// @desc    Get All customer
// @access  Public
router.get('/', (req, res) => {

Customer.find(
        {name:{"$regex":req.query.name,"$options":"i"}}

    )

        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

// @route   GET api/customer
// @desc    Get one customer
// @access  Public
router.get('/:id', (req, res) => {
    Customer.findById(req.params.id)
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Customer not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Customer not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving customer with id " + req.params.id
            });
        });
});

//@route POST api/customer
//@desc Create an customer
//@access Public
router.post("/", (req, res) => {


    const data = new Customer({
        name: req.body.name,
        status:req.body.status

    });
    data.save()
        .then(data => {
            res.json(data);
        }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Customer."
        });


    })
        .catch(err =>console.log(err)
        )
});

//@route POST api/customers
//@desc Create an customer
//@access Public
router.put("/:id", (req, res) => {

    Customer.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        status:req.body.status

    }, {new: true})
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Customer not found with id " + req.params.id
                });
            }
            res.json(data);
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Customer not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error updating customer with id " + req.params.id
            });


        })
        .catch(err =>console.log(err)
        )
});

//@route DELETE api/customer:id
//@desc Delete an customer
//@access Public
router.delete("/:id", (req, res) => {
    Customer.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});
router.get("/stats/count",(req,res)=>{
    Customer.find().then(data=>res.json(data.length)).catch(err => res.status(404).json(err));

})


module.exports = router;

