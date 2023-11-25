
const express = require("express");
const mongoose = require("mongoose");
const MedicineSchema = require("../modelSchema/MedicineSchema");
const MedicineRoute = express.Router();

MedicineRoute.post("/create-medicine",(req,res)=>{
    MedicineSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
        })
})

MedicineRoute.get("/",(req,res)=>{
    MedicineSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

MedicineRoute.route("/update-medicine/:id")
.get((req,res)=>{
    MedicineSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    MedicineSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
        res.json(data);
    })
})

MedicineRoute.delete("/delete-medicine/:id",(req,res)=>{
    MedicineSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
        })
})

module.exports = MedicineRoute; 

// http://localhost:4000/MedicineRoute/update-medicine/6559262af153673d67f0fb58