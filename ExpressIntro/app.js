const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Home Page");
})

app.get('/Product/1',(req,res)=>{
    res.send("Product");
})

app.get('/Product/:id',(req,res)=>{
    console.log(req.params);
    const productId = req.params.id;
    res.send(`you are viewing product id${productId}`);
})

app.get('/getdata',(req,res)=>{
    console.log(req.query)
    res.send("ok");
})

const movies = [
    {
        name:'DDLJ',
        rating:8.5
    },
    {
        name:"Jaadu",
        rating:9
    },
    {
        name:"GOT",
        rating:9.5
    }
]
a
// app.get('/movies',(req,res)=>{
//     res.send(movies);
// })

app.get('/getMovie',(req,res)=>{
    // console.log(req.params);
    let name = req.query.name;
    console.log(name);

    res.json(movies.find((movie)=>movie.name.toLowerCase()===name.toLowerCase()));
})
const Port = 4000;
app.listen(Port,()=>{
    console.log('server run at port',Port);
})