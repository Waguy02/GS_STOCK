const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const UserSchema = new Schema({
code: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: true
  },
  adresse: {
    type: String,
    required: false,
  },
  sexe: {
    type: String,
    required: false,
  },
  date_naissance: {
    type: Date,
    default: Date.now
  },
  niveau: {
    type: String,
    required: false,
  },
  code_createur: {
    type: String,
    required: false,
    unique: false
  },
  date_creation: {
    type: Date,
    default: Date.now
  },
  date_modification: {
    type: Date,
    default: Date.now
  },
  statut: {
    type: Boolean,
    required: false,
}
});

module.exports = Admin = mongoose.model('User', UserSchema);
