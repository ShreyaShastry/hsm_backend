const mongoose = require('mongoose');

const patientRegistrationSchema = new mongoose.Schema({
    firstName: {type:String},
    middleName: {type:String},
    lastName: {type:String},
    street: {type:String},
    city: {type:String},
    state: {type:String},
    zipCode: {type:Number},
    email: {type:String},
    password:{type:String, required:true},
    phone: {type:Number},
    dateOfBirth: {type:String},
    insuranceName: {type:String},
    insuranceNumber: {type:String},
    diabetes: { type: Boolean, default: false },
    hypertension: { type: Boolean, default: false },
    allergies: {type:String},
    surgery: { type: Boolean, default: false },
    allergiesToMedications: {type:String},
    familyMedicalHistory: {type:String},
    currentMedications: {type:String},
    previousSurgeries: {type:String},
    otherMedicalConditions: {type:String},
},{
    collection:"patientRegistration"
});
module.exports = mongoose.model("patientRegistrationSchema",patientRegistrationSchema);