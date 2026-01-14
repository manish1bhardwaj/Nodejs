const express = require('express');
const path =require('path');
const app = express();
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))

app.get('/',(req,res)=>{
    res.send("Working Successfully");
})
const loc  = path.join(__dirname,'index.html');
app.get('/about',(req,res)=>{
    res.sendFile(loc);
})

app.get('/payment',(req,res)=>{
    res.render('abc');
})

app.get('/profile',(req,res)=>{
    res.render("profile");
})

const todos = ['coding','game','dance','cricket'];
app.get('/todos',(req,res)=>{
    res.render("todos");
})

app.listen(4000,()=>{
    console.log("Server Run Successfully at port 4000")
})