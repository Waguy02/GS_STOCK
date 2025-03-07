const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductCommandSchema = new Schema({

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
    provider: {
        type: Schema.Types.ObjectId,
        ref: 'Provider',
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

module.exports =  mongoose.model('ProductCommand', ProductCommandSchema);
