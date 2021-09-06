// load the things we need
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// define the schema for our employee model
const SpecializationMasterSchema = new Schema({
   // Mandatory fields  
  specializationName: { type : String, required : true, lowercase : false}
}, {
  timestamps: true
});
module.exports = mongoose.model('SpecializationMaster', SpecializationMasterSchema);