const mongoose = require("mongoose");

const urlSchemea = new mongoose.Schema({
    originalUrl:{
        type:String,
        required:true
    },
    shortCode:{
        type:String,
        required:true,
        unique:true
    },
    count:{
        type:Number,
        default:0
    }
},{
    timestamps:true
}
);

const url = mongoose.model("Url", urlSchemea)

module.exports = url;