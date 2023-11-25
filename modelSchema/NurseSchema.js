const mongoose = require("mongoose");
const NurseSchema = new mongoose.Schema({
"NurseID":{type:String},
"Name":{type:String},
"Address":{type:String},
"Phone":{type:String},
"DOB":{type:String},
"Email":{type:String},
"Qualification":{type:String},
"Unit":{type:String},
"Salary":{type:Number}
},{
collection: "Nurse"
});
module.exports = mongoose.model("NurseSchema",NurseSchema);