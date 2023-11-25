const express=require('express');
const appointmentRoute = express.Router();
const appointmentSchema = require("../../modelSchema/patients/appointmentSchema");

const mongoose = require('mongoose');

appointmentRoute.post("/create-appointment", (req, res) => {
    console.log("Received a POST request to create-appointment"); // debugging
    appointmentSchema.create(req.body, (err, data) => {
        if (err) {
            console.error("Error when creating appointment:", err); // error logging
            return res.status(500).json({ error: "Appointment creation failed" });
        } else {
            console.log("Appointment created successfully"); // success logging
            res.status(200).json(data);
        }
    });
});


appointmentRoute.get("/",async(req,res)=>{
    const email='shastry@gmail.com';
    try{
        const userData= await appointmentSchema.findOne({email:email})
        if (!userData) {
            return res.status(404).json({ error: "No Appointments" });
          }
          res.json(userData)
    }catch(err){
        onsole.error("Error reading appointment form data", err);
      res.status(500).json({ error: "Internal Server Error" });
    }
    
});

module.exports = appointmentRoute;