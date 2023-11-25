
const express = require("express");
const mongoose = require("mongoose");
const UserSchema = require("../modelSchema/UserSchema");
const UserRoute = express.Router();

UserRoute.post("/create-user",(req,res)=>{
    UserSchema.create(req.body,(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
        })
})

UserRoute.get("/",(req,res)=>{
    UserSchema.find((err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})

UserRoute.route("/update-user/:id")
.get((req,res)=>{
    UserSchema.findById(mongoose.Types.ObjectId(req.params.id),(err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
    })
})
.put((req,res)=>{
    UserSchema.findByIdAndUpdate(mongoose.Types.ObjectId(req.params.id),
    {$set: req.body},
    (err,data)=>{
        if(err)
            return err;
        else
        res.json(data);
    })
})

UserRoute.delete("/delete-user/:id",(req,res)=>{
    UserSchema.findByIdAndRemove(mongoose.Types.ObjectId(req.params.id),
    (err,data)=>{
        if(err)
            return err;
        else
            res.json(data);
        })
})

module.exports = UserRoute; 

// http://localhost:4000/UserRoute/update-user/