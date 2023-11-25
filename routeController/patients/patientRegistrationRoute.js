
const express = require('express');
const patientRegistrationRoute = express.Router();
const patientRegistrationSchema = require('../../modelSchema/patients/pateintRegistrationSchema');
const mongoose = require('mongoose');
const patientLoginSchema = require('../../modelSchema/patients/patientLoginSchema');
const bcrypt = require('bcrypt');

patientRegistrationRoute.post("/patient-registration", async (req, res) => {
    console.log("Received a POST request to register patient"); // debugging
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const registrationData = {
            firstName: req.body.firstName,
            middleName: req.body.middleName,
            lastName: req.body.lastName,
            street: req.body.street,
            city: req.body.city,
            state: req.body.state,
            zipCode: req.body.zipCode,
            email: req.body.email,
            password: hashedPassword,
            phone: req.body.phone,
            dateOfBirth: req.body.dateOfBirth,
            insuranceName: req.body.insuranceName,
            insuranceNumber: req.body.insuranceNumber,
            diabetes: req.body.diabetes || false,
            hypertension: req.body.hypertension || false,
            allergies: req.body.allergies,
            surgery: req.body.surgery || false,
            allergiesToMedications: req.body.allergiesToMedications,
            familyMedicalHistory: req.body.familyMedicalHistory,
            currentMedications: req.body.currentMedications,
            previousSurgeries: req.body.previousSurgeries,
            otherMedicalConditions: req.body.otherMedicalConditions,
        }
        await patientRegistrationSchema.create(registrationData, (err, data) => {
            if (err) {
                console.error("Error while registering patient", err); // error logging
                return res.status(500).json({ error: "Patient registration failed" });
            } else {
                console.log("Registered successfully"); // success 
                res.status(200).json(data);
            }
        });
        await patientLoginSchema.create({
            username: req.body.email,
            password: hashedPassword
        })
    }
    catch (err) {
        console.error("Error while registering patient", err); // error logging
        res.status(500).json({ error: "Patient registration failed" });
    }
})


patientRegistrationRoute.get('/', async (req, res) => {
    console.log("Inside of get method");
    const username = "shastry@gmail.com";
    console.log(username);
    try {
      // Assuming 'username' is the field you want to search for
      const userData = await patientRegistrationSchema.findOne({ email:username });
  
      if (!userData) {
        return res.status(404).json({ error: "User not found" });
      }
  
      res.json(userData);
    } catch (err) {
      console.error("Error reading patient registration data", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });
  
module.exports = patientRegistrationRoute;