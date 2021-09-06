// load the things we need
const mongoose = require('mongoose');
const {Schema} = mongoose;
// define the schema for our employee model
const AssociatesMasterSchema = new Schema({
   // Mandatory fields  
  associateName: {type : String, required : true, lowercase : false, unique: true, index: true},
  phone: {type : Number, required : true, index: {unique: true}},
  address: {type : String, required : false, lowercase : false},
  // Relationships
  specializations: [{type: Schema.Types.ObjectId, ref: "SpecializationMaster"}]
}, {
  timestamps: true
});
module.exports = mongoose.model("AssociatesMaster", AssociatesMasterSchema)