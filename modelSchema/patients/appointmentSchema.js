const mongoose = require('mongoose');


const appointmentSchema = new mongoose.Schema({
    "name":{type:String},
    "mobile":{type:Number},
    "email":{type:String},
    "department":{type:String},
    "date":{type:String},
    "time":{type:String}
},{
    collection:"appointments"
});
module.exports = mongoose.model("appointmentSchema",appointmentSchema);