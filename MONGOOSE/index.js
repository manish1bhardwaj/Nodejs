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
    name:String,
    age:Number,         //{type:Number,min:18,max:40,require:true}
    City:String
})


const port = 4000;
app.listen(port,()=>{
    console.log("Server is running at port 4000");
});