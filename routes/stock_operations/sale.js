


const express = require('express');
const router = express.Router();

// Item Model

const Sale = require('../../models/sale');
const SaleUnit=require('../../models/sale_unit');
const ProductClass=require('../../models/product_class');


// @route   GET api/sale
// @desc    Get All sale
// @access  Public
router.get('/', (req, res) => {
    Sale.find()
        .populate('manager')
        .populate('customer')

        .then(data => res.json((data)))
        .catch(err => console.log(err));
});

// @route   GET api/sale
// @desc    Get one sale
// @access  Public
router.get('/:id', (req, res) => {
    Sale.findById(req.params.id)
        .populate('manager')
        .populate('customer')
        .then(data => {
            if(!data) {
                return res.status(404).send({
                    message: "Sale not found with id " + req.params.id
                });
            }
            res.json(data)
        })
        .catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "Sale not found with id " + req.params.id
                });
            }
            return res.status(500).send({
                message: "Error retrieving sale with id " + req.params.id
            });
        });
});

//@route POST api/sale
//@desc Create a sale!
//@access Public


router.post("/", (req, res) => {


    const saleUnits = req.body.sale_units;

    const data = new Sale({
        name: req.body.name,
        date_initiating: req.body.date_initiating,
        date_finalizing: req.body.date_finalizing,
        manager: req.body.manager,
        amount: req.body.amount,
        customer: req.body.customer,
        status: false,

    });
    Sale.startSession().then(session => {
        session.startTransaction();
        data.save()
            .then(data => {

                //Registering all the productCOmmandUNit
                try {
                    for (var unit of saleUnits) {
                        var pcu = new SaleUnit();
                        Object.assign(pcu, unit);
                        pcu.sale = data;
                        pcu.date_delivrance = data.date_finalizing




                        pcu.save().then(data => {
                        })


                    }
                    session.commitTransaction();

                } catch (err) {
                    console.log("Erreur survenue lors de l'enregistrement de la commande")
                    console.log(err);
                    session.abortTransaction();

                    throw(err);

                }

                res.json(data);
            })

            .catch(err => {
                console.log(err.message)
                session.abortTransaction();
                res.status(500).send({
                    message: err.message || "Some error occurred while creating the Sale."
                });


            })
    })
        .catch(err => {
            console.log(err);
            res.status(500).send(err);
        });


});

;

//@route POST api/sales
//@desc Create an sale
//@access Public


router.put("/closepmts/:id",(req,res)=>{
    console.log("CLosing command payments")
    Sale.findByIdAndUpdate(req.params.id, { payment_status:req.body.status}, {new: true}).then(data=>res.json(data))  .catch(err => {
        console.log(err.message)
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Sale."
        });



    })});



router.put("/:id", (req, res) => {

    Sale.startSession().then(
        session=>{
            session.startTransaction();


            Sale.findByIdAndUpdate(req.params.id, {date_finalizing:new Date(), status:req.body.status}, {new: true})
                .then(data => {if(!data) {
                    return res.status(404).send({
                        message: "Sale not found with id " + req.params.id
                    });
                }
                    var c_id=data._id;
                    SaleUnit.find({"sale":c_id}).
                    populate('product_class').then
                    (
                        pcus => {
                            for (var pcu of pcus) {


                                //Modification de la quantité

                                    ProductClass.findById(pcu.product_class._id).then(pc => {


                                        pc.quantity-=pcu.quantity;

                                    if (pc.quantity < 0||pc.status==false) {var error=new Error("Vente incorrecte : aboutit à une quantité négative ");res.status(500).json(error);session.abortTransacion();
                                    }
                                        if(pc.quantity==0)pc.status=false
                                    pc.save().then(data => {
                                    })

                        }).catch(err=>{throw(err)})


                    session.commitTransaction();

                    res.json(data);

                } })
                .catch(err => {

                    session.abortTransaction();
                    if(err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "Sale not found with id " + req.params.id
                        });
                    }
                    return res.status(500).send({
                        message: "Error updating sale with id " + req.params.id
                    });


                })


        })

}) });

//@route DELETE api/sale:id
//@desc Delete an sale
//@access Public
router.delete("/:id", (req, res) => {
    Sale.findById(req.params.id)
        .then(data =>
            data
                .remove()
                .then(data => res.json(data))
                .catch(err => res.json({ success: false }))
        )
        .catch(err => res.status(404).json({ success: false }));
});



router.get("/stats/count_oncomming",(req,res)=>{
   Sale.find({status:false}).
    then(data=>{
        var result={count:0,amount:0}
        for( var command of data){
            result.count++;
            result.amount+=command.amount;
        }

        res.json(result)

    }).catch(err =>res.status(404).res.json(err));


})



router.get("/stats/last",(req,res)=>{
    Sale.find({status:true})
        .sort({'date_finalizing':-1}).then(data=>
    {
        res.json(data[0])


    }).catch(err =>res.status(404).res.json(err))

})


module.exports = router;






module.exports = router;

