const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

const filepath = path.join(__dirname,'notes.txt');

const server  = http.createServer((req,res)=>{
    const parsed = url.parse(req.url,true);
    const route  = parsed.pathname;

    if(route==="/add" && req.method==="GET"){
        const note = parsed.query.note;
        if(!note){
            res.writeHead(400);
            return res.end("400 Bad Request");
        }
        fs.appendFile(filepath,note+"\n",(err)=>{
            if(err){
                res.writeHead(500);
                return res.end("Server Errro");
            }
            res.end("Note Added Successfully");
            
        });
    }
    else if(route==="/notes"&& req.method==="GET"){
        fs.readFile(filepath,'utf8',(err,data)=>{
            if(err || data.trim()===""){
                return res.end("No Notes Found");
            }
            res.end(data);
        });
    }
    else if(route==="/clear"&& req.method==="GET"){
        fs.writeFile(filepath,"",(err)=>{
            if(err){
                res.writeHead(500);
                return res.end("Server Error");
            }
            res.end("ALL Notes Deleted");
        });
    }
    else{
       res.writeHead(404);
       res.end("404 route Not Found"); 
    }
});

const port = 4000;
server.listen(port,()=>{
    console.log("Server running at port 4000");
});