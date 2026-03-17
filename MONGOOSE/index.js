const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/Backend')
    .then(()=>{
        console.log("Db Connect");
    })
    .catch(()=>{
        console.log("Do not Connect");
    })

const userSchema = new mongoose.Schema({
    username:String,
    password:String,
    age:Number,         //{type:Number,min:18,max:40,require:true}
    city:String
});

const Users = mongoose.model("Users",userSchema);
// Create read update delete

// CREATE

// Users.create({
//     username:"Abhishek",
//     password:"Abhi@123",
//     age:28,
//     city:"Bharatpur"
// }).then(()=>{console.log("document created")});

// READ

// Users.find({}).then((data)=>{console.log(data)});
// Users.findOne({}).then((data)=>{console.log(data)});
// Users.find({city:"Agra"}).then((data)=>{console.log(data)});
// Users.findById({_id:"69b91a1bee0888666475e0e1"}).then((data)=>{console.log(data)});

// UPDATE

// Users.updateOne({city:"Agra"},{age:34}).then(()=>{console.log("updated")});
// Users.findByIdAndUpdate({_id:"69b918288c14754d14fb0ae2"},{city:"Delhi"}).then(()=>{console.log("updated")});
// Users.updateMany({},{age:28}).then(()=>{console.log("updated")});

// DELETE


const port = 4000;
app.listen(port,()=>{
    console.log("Server is running at port 4000");
});