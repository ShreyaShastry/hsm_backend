const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
"UserID":{type:String},
"Password":{type:String},
"Role":{type:String},
},{
collection: "User"
});
module.exports = mongoose.model("UserSchema",UserSchema);