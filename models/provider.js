const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const ProviderSchema = new Schema({
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

module.exports =  mongoose.model('Provider', ProviderSchema);
