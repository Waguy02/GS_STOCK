const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var deepPopulate = require('mongoose-deep-populate')(mongoose);

const ProductCommandUnitSchema = new Schema({

    quantity:{
        type:'string',
        required:false

    },
    unit_price:{
        type:'number',


    },
    product_class:{
        type:Schema.Types.ObjectId,
        ref:'ProductClass',
        required:true,

        },

    product_command:{
        type:Schema.Types.ObjectId,
        ref:'ProductCommand',
        required:true,
    },

    date_delivrance: {
        type: 'date',
        required: true
    },

    status:{
        type:'boolean',
        required:false,
        default:true
    }

});

ProductCommandUnitSchema.plugin(deepPopulate, { whitelist: ['product_class', 'product_class.product']});
module.exports =  mongoose.model('ProductCommandUnit', ProductCommandUnitSchema);
