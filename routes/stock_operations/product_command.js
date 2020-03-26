


const express = require('express');
const router = express.Router();

// Item Model

const ProductCommand = require('../../models/product_command');
const ProductCommandUnit=require('../../models/product_command_unit');
const ProductClass=require('../../models/product_class');


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


    const productCommandUnits=req.body.command_units;

    const data = new ProductCommand({
        name: req.body.name,
        date_initiating: req.body.date_initiating,
        date_finalizing:req.body.date_finalizing,
        manager:req.body.manager,
        amount:req.body.amount,
        provider:req.body.provider,
        status:false,

    });
    data.save()
        .then(data => {

            //Registering all the productCOmmandUNit

            ProductCommandUnit.startSession().then(

                session=> {
                    session.startTransaction();
                    try {
                        for (var unit of productCommandUnits) {
                            var pcu = new ProductCommandUnit();
                            Object.assign(pcu, unit);
                            pcu.product_command = data;
                            pcu.date_delivrance = data.date_finalizing
                            //Création de la classe de produit.
                            var classProduit = new ProductClass();
                            classProduit.product = unit.product_class.product;
                            classProduit.unit_price = unit.unit_sale_price;
                            classProduit.quantity = unit.quantity;
                            classProduit.date_intrance = data.date_finalizing;
                            classProduit.status =null;
                            classProduit.save().then(cl => {


                                pcu.product_class = cl;

                                pcu.save().then(data => {
                                }).catch(err => {

                                    throw (err)
                                });

                            }).catch(err => {
                                throw(err)
                            });
                        }

                    }
                    catch (err) {
                        console.log("Erreur survenue lors de l'enregistrement de la commande")
                        console.log(err);
                            session.abortTransaction();

                        throw(err);

                    }
                    session.commitTransaction();

                })
                res.json(data);

        }).catch(err => {
            console.log(err.message)
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


router.put("/closepmts/:id",(req,res)=>{
    console.log("CLosing command payments")
  ProductCommand.findByIdAndUpdate(req.params.id, { payment_status:req.body.status}, {new: true}).then(data=>res.json(data))  .catch(err => {
      console.log(err.message)
      res.status(500).send({
          message: err.message || "Some error occurred while creating the ProductCommand."
      });



})});


router.put("/:id", (req, res) => {

    ProductCommand.startSession().then(
        session=>{
            session.startTransaction();


            ProductCommand.findByIdAndUpdate(req.params.id, {date_finalizing:new Date(), status:req.body.status}, {new: true})
                .then(data => {if(!data) {
                        return res.status(404).send({
                            message: "ProductCommand not found with id " + req.params.id
                        });
                    }
                    var c_id=data._id;
                ProductCommandUnit.find({"product_command":c_id}).
                populate('product_class').then
                (
                    pcus => {
                        for (var pcu of pcus) {
                            pcu.product_class.status = true;
                            pcu.product_class.date_intrance=data.date_finalizing;
                            pcu.product_class.save().then(data => {
                            }).catch(err =>{ throw (err)})
                        }
                    }

                ).catch(err=>{throw(err)})


                    session.commitTransaction();

                    res.json(data);

                })
                .catch(err => {

                    session.abortTransaction();
                    if(err.kind === 'ObjectId') {
                        return res.status(404).send({
                            message: "ProductCommand not found with id " + req.params.id
                        });
                    }
                    return res.status(500).send({
                        message: "Error updating product_command with id " + req.params.id
                    });


                })


        })



















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


router.get("/stats/count_oncomming",(req,res)=>{
ProductCommand.find({status:false}).
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
ProductCommand.find({status:true})
    .sort({'date_finalizing':-1}).then(data=>
{
    res.json(data[0])


}).catch(err =>res.status(404).res.json(err))

})


module.exports = router;

