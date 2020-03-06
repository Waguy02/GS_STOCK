const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PaymentSchema = new Schema({

    date:{
        type:'date',
        required:'true'
    }
    ,

    amount : {
      type:'number',
      required:'true',

    },

    product_command:{

        type:Schema.Types.objectId,
        ref:'ProductCommand',
        required:false,
    },




    status:{
        type:'boolean',
        required:false,
        default:true
    }

});

module.exports =  mongoose.model('Payment', PaymentSchema);
