const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductClassSchema = new Schema({

    unit_price:{

        type:'string',
        required:true
    },
label:{
    type:'string',

    },

    quantity:{
        type:'number',
        required:false,

    },
    product:{
       type:Schema.Types.ObjectId,
        ref:'Product',
        required:true,


    },


date_intrance:{
    type:"date"},






    status:{
        type:'boolean',
        required:false,
        default:true
    }

});

module.exports =  mongoose.model('ProductClass', ProductClassSchema);
