const http = require('http'); 
const fs = require('fs'); 
const log = console.log;

const server = http.createServer((req , res)=> {

   var productData = fs.readFileSync(`${__dirname}/userApi/productApi.json`,"utf8");
    // console.log(req.url);
    if(req.url == "/"){
        res.end('Home Page');
    }else if(req.url == "/about") {
        res.end('About Page');
    } else if(req.url == "/product") {
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(productData);
    } else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1> 404 Not Found.</h1>');
    }
    
});

server.listen(8000 , "127.0.0.1",()=> {
    log("listning to port no 8000");
})