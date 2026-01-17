const express = require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

app.get('/Home',(req,res)=>{
    res.render('home');
})

app.get('/About',(req,res)=>{
    res.render('about');
})

app.get('/Contact',(req,res)=>{
    res.render('contact');
})











app.listen(4000,()=>{
    console.log('server run successfully at port 4000');
})