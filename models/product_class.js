const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductClassSchema = new Schema({

    unit_price:{

        type:'string',
        required:true
    },

    quantity:{
        type:'number',
        required:true,

    },
    product:{
       type:Schema.Types.ObjectId,
        ref:'Product',
        required:true,


    },








    status:{
        type:'boolean',
        required:false,
        default:true
    }

});

module.exports =  mongoose.model('ProductClass', ProductClassSchema);
