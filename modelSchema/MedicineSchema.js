const mongoose = require("mongoose");
const MedicineSchema = new mongoose.Schema({
"MedicineID":{type:String},
"Name":{type:String},
"CompanyName":{type:String},
"Rate":{type:Number},
"Quantity":{type:Number}
},{
collection: "Medicine"
});
module.exports = mongoose.model("MedicineSchema",MedicineSchema);