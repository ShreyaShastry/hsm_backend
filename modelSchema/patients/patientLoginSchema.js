const mongoose = require('mongoose');

const patientLoginSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model("patientLoginSchema",patientLoginSchema);