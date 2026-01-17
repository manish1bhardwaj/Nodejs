const fs = require("fs");
const path = require("path");

const loc = path.join(__dirname, "abc.txt");

fs.readFile(loc, (encoding="utf-8"),(err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});