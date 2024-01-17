const fs = require('fs');

// creating new file 
fs.writeFileSync('read.txt',"Welcome to Webvision ");

// append data
fs.appendFileSync('read.txt', "Hello How are you , iam fine");

// read data file 
const buf_data = fs.readFileSync('read.txt');
console.log(buf_data);

// convert from buffer to string
org_data = buf_data.toString();
console.log(org_data);

//to rename the file
fs.renameSync('read.txt','readWrite.text');