const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ManagerSchema = new Schema({
    name:{
        type:"string",
        required:true
    }
    ,
        password:{
                type:"string",
            required:true
            },
    status:{
        type:'boolean',
        required:false,
        default:true
    }

});

module.exports =  mongoose.model('Manager', ManagerSchema);
