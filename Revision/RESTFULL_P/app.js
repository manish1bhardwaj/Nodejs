const express= require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));

const users = require('./data/user.js');
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/users',(req,res)=>{
    res.render('users',{users});
})

app.listen(4000,()=>{
    console.log("Server run successfully at port 4000");
})