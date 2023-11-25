
const express = require("express");
const mongoose = require("mongoose");
const DoctorSchema = require("../modelSchema/DoctorSchema");
const DoctorRoute = express.Router();
const { ObjectId } = require('mongoose').Types;

DoctorRoute.post("/create-doctor",(req,res)=>{
    DoctorSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
        })
})

DoctorRoute.get("/",(req,res)=>{
    DoctorSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

DoctorRoute.route("/update-doctor/:id")
.get((req,res)=>{
    DoctorSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    DoctorSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
        res.json(data);
    })
})

DoctorRoute.delete("/delete-doctor/:id",(req,res)=>{
    DoctorSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
        })
})

module.exports = DoctorRoute; 

// http://localhost:4000/DoctorRoute/update-doctor/6559262af153673d67f0fb58