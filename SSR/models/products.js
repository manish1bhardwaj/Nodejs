const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    image:{type:String,required:true,trim:true},
    price:{type:Number,min:0,required:true},
    desc:{type:String,required:true,trim:true},
})

const Prouduct = mongoose.model("Prouduct",productSchema);

module.exports = Prouduct;
 