const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SaleSchema = new Schema({

    date_initiating:{
        type:'date',
        required:true,
    }

    ,
    date_finalizing:{
        type:'date'
    },

    status:{
        type:'boolean',
        required:false,
        default:true
    },
    amount:{
        type:"number"
    },
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    manager: {
        type:Schema.Types.ObjectId,
        ref:'Manager',
        required:true


    },
    payment_status:{
        type:'boolean',
        default:'false'

    }





});

module.exports =  mongoose.model('Sale', SaleSchema);
