const express = require('express');
const app = express();
const path =require('path');
app.set("view engine","ejs")
app.set("views",path.join(__dirname,"views"))
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('Home');
})
app.get('/abc',(req,res)=>{
    console.log(req.query);
    res.send('ok');
})
app.get('/Signup',(req,res)=>{
    res.render('Signup')
})

app.post('/login',(req,res)=>{
    res.render('login')
})

app.post('/abc',(req,res)=>{
    console.log(req.body)
    res.send('ok')
})
const data =['game','song','dance','paly'];
app.get('/todos',(req,res)=>{
    res.render('todos',{data});
})
app.listen(4000,(req,res)=>{
    console.log("Server run successfully at port 4000");
})
