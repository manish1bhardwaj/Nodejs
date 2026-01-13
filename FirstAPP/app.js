const express = require('express');
const app = express();

app.get('/',(req ,res)=>{
    res.send("My first express page");
})

app.get('/About',(req,res)=>{
    res.send("this is about page")

})
app.get('/Contact',(req,res)=>{
    res.send("this is Contact page")

})

app.get(/.*/,(req,res)=>{
    res.send("404 Page not found")

})

//app.get('*',(req,res)=>{
//     res.send("404 Page not found") not work in version 5 express .

// })
app.listen(4000)