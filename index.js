const mongoose = require('mongoose');
const express = require('express');
const app = express();
const appointmentRoute = require('./routeController/patients/appointmentRoute');
const patientRegistrationRoute = require('./routeController/patients/patientRegistrationRoute');
const patientLoginRoute = require('./routeController/patients/patientLoginRoute');


const DoctorRoute = require("./routeController/DoctorRoute")
const NurseRoute = require("./routeController/NurseRoute");
const UserRoute = require("./routeController/UserRoute");
const MedicineRoute = require("./routeController/MedicineRoute");


const bodyParser = require('body-parser');
const cors = require('cors');

mongoose.set("strictQuery",true);

//mongoose.connect("mongodb+srv://shreya:12345@cluster0.ycl1f8c.mongodb.net/patientdb");
mongoose.connect("mongodb+srv://admin:12345@cluster0.lze794n.mongodb.net/Hospital")
var db = mongoose.connection;
db.on("open",()=>console.log("Connected to DB"));
db.on("error",()=>console.log("Error occured"));


//middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

//Routes
app.use("/appointmentRoute", appointmentRoute);
app.use("/patientRegistrationRoute",patientRegistrationRoute);
app.use("/patientLoginRoute",patientLoginRoute);
app.use("/DoctorRoute",DoctorRoute);// '/HospitalRoute' putted as url bar
app.use("/NurseRoute",NurseRoute);// '/NurseRoute' putted as url bar
app.use("/UserRoute",UserRoute);// '/UserRoute' putted as url bar
app.use("/MedicineRoute",MedicineRoute);


app.listen(4000,()=>{
    console.log("Server listening at 4000");
})