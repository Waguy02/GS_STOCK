const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserGroupSchema = new Schema({
code: {
    type: String,
    required: false
  },
 user:{
    type: Schema.Types.ObjectId,
    ref: 'User',
    unique:false
 },

 group:{
    type:Schema.Types.ObjectId,
    ref:'Group',
    unique:false

 },


  statut: {
    type: Boolean,
    required: false,
}
});

module.exports = UserGroup = mongoose.model('UserGroup', UserGroupSchema);
