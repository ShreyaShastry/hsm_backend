const express = require('express');
const patientLoginRoute = express.Router();
const patientLoginSchema = require("../../modelSchema/patients/patientLoginSchema");
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

// Authorization middleware
const authorize = async (req, res, next) => {

  const {authorization} = req.headers;
  try{
    jwt.verify(authorization,'yourSecretKey',(err,decoded)=>{
      if(err){
        return res.status(403).json({error:'Unauthorized'});
      }
      next();
    });
  }catch(error){
    console.error(error);
    res.status(500).json({error:"Internal Server Error"});
  }

  
};

// Route for checking user authentication
patientLoginRoute.post("/", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await patientLoginSchema.findOne({ username: username });
    if (user && bcrypt.compareSync(password,user.password)){
      const token = jwt.sign({username:user.username},'yourSecretKey',{expiresIn:'1h'});
      res.json({token});
    }else{
      res.status(401).json({error:"Invalid Creds"});
    }
    
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

patientLoginRoute.post("/book-appointment", authorize, async (req, res) => {

  res.json({ message: 'Appointment booked successfully' });
});

module.exports = patientLoginRoute;
    