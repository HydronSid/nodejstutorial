import { createServer } from 'http'; 
import { readFileSync } from 'fs'; 
import { parse } from 'url';
import slugify from 'slugify';
const log = console.log;

import replaceTemplate from './userApi/helper/replaceTemplate';

var tempOverview = readFileSync(`${__dirname}/userApi/templates/template-overview.html`,"utf8");
var tempCard = readFileSync(`${__dirname}/userApi/templates/template-card.html`,"utf8");
var tempProduct = readFileSync(`${__dirname}/userApi/templates/template-product.html`,"utf8");

var data = readFileSync(`${__dirname}/userApi/data.json`,"utf8");
var dataObj = JSON.parse(data);
//log(slugify("Siddhant Mestry",{lowercase : true}));
const server = createServer((req , res)=> {
    
    const  {query , pathname} =  parse(req.url, true);;
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