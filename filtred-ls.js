const fs = require("fs");
const path=require("path");
fs.readdir(process.argv[2],function(err, list) {
    if (err) {
       return console.error(err);
    };
    list.forEach(file=>{path.extname(file)==("."+process.argv[3])?console.log(file):null})
    });