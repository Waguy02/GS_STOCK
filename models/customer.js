const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CustomerSchema = new Schema({
    name:{
        type:"string",
        required:"string"
    }
    ,
    status:{
        type:'boolean',
        required:false,
        default:true
    }

});

module.exports =  mongoose.model('Customer', CustomerSchema);
