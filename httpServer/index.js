const http = require('http'); 
const fs = require('fs'); 
const url = require('url');
const log = console.log;

const replaceTemplate = (temp , product)=> {
    let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
    output = output.replace(/{%IMAGE%}/g, product.image);
    output = output.replace(/{%PRICE%}/g, product.price);
    output = output.replace(/{%FROM%}/g, product.from);
    output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
    output = output.replace(/{%QUANTITY%}/g, product.quantity);
    output = output.replace(/{%DESCRIPTION%}/g, product.description);
    output = output.replace(/{%ID%}/g, product.id);

    if(!product.organic) output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');
    return output;
}

var tempOverview = fs.readFileSync(`${__dirname}/userApi/templates/template-overview.html`,"utf8");
var tempCard = fs.readFileSync(`${__dirname}/userApi/templates/template-card.html`,"utf8");
var tempProduct = fs.readFileSync(`${__dirname}/userApi/templates/template-product.html`,"utf8");

var data = fs.readFileSync(`${__dirname}/userApi/data.json`,"utf8");
var dataObj = JSON.parse(data);

const server = http.createServer((req , res)=> {
    
    const  {query , pathname} =  url.parse(req.url, true);

    // Overview Page
    if(pathname == "/" || pathname == "/overview"){
        res.writeHead(200,{"Content-type":"text/html"});
        const cardsHtml = dataObj.map((element)=> replaceTemplate(tempCard , element)).join('');
        const output = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml);
        res.end(output);

    // Product
    } else if(pathname == "/product") {
        res.writeHead(200,{"Content-type":"text/html"});
        const product = dataObj[query.id];
        const output = replaceTemplate(tempProduct , product);
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