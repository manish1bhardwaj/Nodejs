const express = require('express');
const app = express();
const path =require('path');
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

// app.use(express.static('public'))
app.use(express.static(path.join(__dirname,'public')))

app.get('/Home',(req,res)=>{
    res.render("XYZ");
})
app.get('/About',(req,res)=>{
    res.render('ABC')
})

app.listen(4000,()=>{
    console.log("Server run successfully at port 4000")
})