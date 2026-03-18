const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost:27017/SSR')
    .then(()=>{
        console.log("Db Connect");
    })
    .catch(()=>{
        console.log("Do not Connect");
    })
const Products = require("./models/product");
const port = 4000;
app.listen(port,()=>{
    console.log("Server running at port 4000");
});