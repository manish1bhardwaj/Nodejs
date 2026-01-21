const express= require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,"views"));
app.use(express.urlencoded({extended:true}));

const users = require('./data/user.js');
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.send('Home Page');
})

app.get('/users',(req,res)=>{
    res.render('users',{users});
})

app.get('/users/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const{name,age,course,password}= req.body;
    users.push({
        id:users[users.length-1].id+1,
        name,age,course,password
    })
    res.redirect('/users')
})

app.listen(4000,()=>{
    console.log("Server run successfully at port 4000");
})