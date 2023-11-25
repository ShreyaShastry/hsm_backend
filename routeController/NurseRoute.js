
const express = require("express");
const mongoose = require("mongoose");
const NurseSchema = require("../modelSchema/NurseSchema");
const NurseRoute = express.Router();

NurseRoute.post("/create-nurse",(req,res)=>{
    NurseSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
        })
})

NurseRoute.get("/",(req,res)=>{
    NurseSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

NurseRoute.route("/update-nurse/:id")
.get((req,res)=>{
    NurseSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    NurseSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
        res.json(data);
    })
})

NurseRoute.delete("/delete-nurse/:id",(req,res)=>{
    NurseSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
        })
})

module.exports = NurseRoute; 

// http://localhost:4000/NurseRoute/update-nurse/