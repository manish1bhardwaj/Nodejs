const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name:{type:String,required:true,trim:true},
    price:{type:Number,min:0,required:true,trim:true},
    image:{type:String,required:true,trim:true},
    desc:{type:String,required:true,trim:true}
});

const Products = mongoose.model("Products",productSchema);

module.exports=Products;