const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CategorySchema = new Schema({
name:{
    type:'string',
    required:true
}  ,

description:{
    type:'string',
    required:true

        },
    status: {
    type:'boolean',
    required:true,
    default:true

    }
});

module.exports =  mongoose.model('Category', CategorySchema);
