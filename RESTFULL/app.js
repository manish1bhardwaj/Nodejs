const express =require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set("views",path.join(__dirname,"views"))

const users = require('./data/users');
app.use(express.static("public"));

app.get ('/',(req,res)=>{
    res.render('home')
})

app.get ('/users',(req,res)=>{
    res.render('users',{users})
})


app.listen(4000,()=>{
    console.log('server run successfully at port 4000');
})