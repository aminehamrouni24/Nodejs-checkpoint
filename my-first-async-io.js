const fs= require('fs') 
fs.readFile(process.argv[2], function (err, buff){
const str = buff.toString()
let lines=str.split('\n').length-1
console.log(lines)
})