const express = require("express");
const app = express();

const mongoose = require("mongoose");
const Users = require("./models/Users");
const bcrypt = require("bcrypt");
const session = require("express-session");

app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs")

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true,
  cookie:{
    maxAge: 2*60*1000
  }
}))

mongoose.connect("mongodb://localhost:27017/auth")
    .then(()=>{console.log("DB conected!")})
    .catch(()=>{console.log("DB not conected!")})

app.get('/',(req,res)=>{
    console.log(req.session);
    res.render("home")
})

app.get('/signup',(req,res)=>{
    res.render("signup")
})

app.post("/signup",async (req,res)=>{
    // console.log(req.body)
    const {username,email,password} = req.body;
    const hashPassword = await bcrypt.hash(password,10);

    let existingUser = await Users.findOne({username})
    if(existingUser){
        res.redirect("/signup")
    }
    else{
        await Users.create({username,email,password:hashPassword})
        res.redirect('/login');
    }
})

let isAuth = (req,res,next)=>{
    console.log(req.session);
    if(req.session.user){
        next()
    }
    else{
        res.redirect('/login')
    }
}

app.get('/payment',isAuth,(req,res)=>{
    res.send("PAYMENT PAGE")
})

app.get('/login',(req,res)=>{
    res.render("login")
})

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const user = await Users.findOne({username});
    if(user){
        let result = await bcrypt.compare(password,user.password);
        console.log(result);
        if(result){
            //password verify;
            // create session sid

            req.session.user=username;
            res.redirect('/payment')
        }
        else{
            res.redirect('/login')
        }
    }
    else{
        res.redirect("/login")
    }
}) 

app.post('/logout',(req,res)=>{
    req.session.destroy();
    res.redirect('/')
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log("Server run at port",PORT);
})