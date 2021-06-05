const fs = require("fs");
const Buf=fs.readFileSync( process.argv[2]).toString();
console.log(Buf.split("\n").length-1);