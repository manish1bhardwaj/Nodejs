const express = require('express');
const app = express();
const path = require('path');
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "views"))
app.use(express.urlencoded({ extended: true }));

const users = require('./data/users');
app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('home')
})

app.get('/users', (req, res) => {
    res.render('users', { users })
})

app.get('/users/new', (req, res) => {
    res.render('new');
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const {name,age,city,password} = req.body;
    users.push({
        id:users[users.length-1].id+1,
        name,age,city,password
    })
    res.redirect('/users')
})

app.listen(4000, () => {
    console.log('server run successfully at port 4000');
})