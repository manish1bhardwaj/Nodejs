const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/');



const port = 4000;
app.listen(port,()=>{
    console.log("Server is running at port 4000");
});