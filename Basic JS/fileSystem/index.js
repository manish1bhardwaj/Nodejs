const fs= require("fs");
const path= require("path");

const loc = path.join(__dirname, "file.txt");
const data = "Hello World";

fs.writeFile(loc, data, (err) => {
    if(err){
        console.log(err);
    }else{
        console.log("File Created");
    }
});

fs.readFile(loc, (err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});
