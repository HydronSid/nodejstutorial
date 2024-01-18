const http = require('http'); 
const log = console.log;
const server = http.createServer((req , res)=> {
    // console.log(req.url);
    if(req.url == "/"){
        res.end('Home Page');
    }else if(req.url == "/about") {
        res.end('About Page');
    } else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1> 404 Not Found.</h1>');
    }
    
});


server.listen(8000 , "127.0.0.1",()=> {
    log("listning to port no 8000");
})