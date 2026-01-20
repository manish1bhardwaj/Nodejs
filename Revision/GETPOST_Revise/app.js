const express = require('express');
const app = express();
const path = require('path');
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded({extended:true}));


app.get('/',(req,res)=>{
    res.send('Home');
})

app.get('/signup',(req,res)=>{
    res.render('signup');
})
app.get('/signups',(req,res)=>{
    console.log(req.query);
    res.send('ok')
})

app.get('/login',(req,res)=>{
    res.render('login');
})
app.post('/logins',(req,res)=>{
    console.log(req.body);
    res.send('ok')
})


app.listen(5000,()=>{
    console.log("Server run successfully at port 5000");
});