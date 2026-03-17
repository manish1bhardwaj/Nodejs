const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res)=>{

    const log = (`Route:${req.url} | Method:${req.method} | Time :${new Date().toLocaleString()}\n`);
    fs.appendFile('request.log',log,(err)=>{
        if(err){
        console.log("Error Writing Log: ",err);
        }
    });

    if(req.url==="/"){
        res.write("HomePage");
    }
    else if(req.url==="/about"){
        res.write("About Page");
    }
    else if(req.url==="/contact"){
        res.write("Contact Page");
    }
    else{
        res.write("404 Page not found");
    }

    res.end();
});

const port = 4000;

server.listen(port,()=>{
    console.log("Server Run Successfully at port 4000");
});