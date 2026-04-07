const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({
    secret: "abcd123",
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    console.log(req.session);
    res.send("Home Page");
});

app.get("/login",(req,res)=>{
    req.session.user = "abcd";
    res.send("you are user in");
});

const PORT = 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});