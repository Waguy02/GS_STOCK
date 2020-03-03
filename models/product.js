const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
name:{
    type:'string',
    required:true,
},

    unit_price:{

    type:'string',
        required:true
    },

    description:{
        type:'string',
        required:false

    },
    unit_price:{
    type:'number',


    },
    category:{
        type: Schema.Types.ObjectId,
        ref: 'Category',
        unique:false
    },
    status:{
        type:'boolean',
        required:false,
        default:true
    }

});

module.exports =  mongoose.model('Product', ProductSchema);
