const mongoose = require("mongoose");
const DoctorSchema = new mongoose.Schema({
"DoctorID":{type:String},
"Name":{type:String},
"Address":{type:String},
"Phone":{type:String},
"DOB":{type:String},
"Email":{type:String},
"Qualification":{type:String},
"Unit":{type:String},
"Timings":{type:String},
"Salary":{type:Number}
},{
collection: "Doctor"
});
module.exports = mongoose.model("DoctorSchema",DoctorSchema);