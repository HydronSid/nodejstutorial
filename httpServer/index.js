const http = require('http');
const url = require('url');
const fs = require('fs');
const slugify = require('slugify');
const rt = require('./userApi/helper/replaceTemplate');
const log = console.log;

var tempOverview = fs.readFileSync(`${__dirname}/userApi/templates/template-overview.html`,"utf8");
var tempCard = fs.readFileSync(`${__dirname}/userApi/templates/template-card.html`,"utf8");
var tempProduct = fs.readFileSync(`${__dirname}/userApi/templates/template-product.html`,"utf8");

var data = fs.readFileSync(`${__dirname}/userApi/data.json`,"utf8");
var dataObj = JSON.parse(data);
log(slugify("Siddhant Mestry",{lower : true}));
  
const slugs = dataObj.map(e => slugify(e.productName , {lower : true}));
log(slugs);
const server = http.createServer((req , res)=> {
    
    const  {query , pathname} = url.parse(req.url, true);
    // Overview Page
    if(pathname == "/" || pathname == "/overview"){
        res.writeHead(200,{"Content-type":"text/html"});
        const cardsHtml = dataObj.map((element)=> rt.replaceTemplate(tempCard , element)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml);
        res.end(output);

    // Product
    } else if(pathname == "/product") {
        res.writeHead(200,{"Content-type":"text/html"});
        const product = dataObj[query.id];
        const output = rt.replaceTemplate(tempProduct , product);
        res.end(output);

    // Api
    }else if(pathname == "/api") {
        res.writeHead(200,{"Content-type":"application/json"});
        res.end(data);

    // Not Found
    } else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end('<h1> 404 Not Found.</h1>');
    }
});

server.listen(8000 , "127.0.0.1",()=> {
    log("listning to port no 8000");
})