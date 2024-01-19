const fs = require('fs');
const http = require('http');
const log = console.log;
const error = console.error;

const server = http.createServer();

server.on('request' , (req , res)=> {
    // Without Stream
    // fs.readFile("siddhant.txt",(err , data)=> {     
    //     if(err) return error(err);
    //    res.end(data);
    // });

    // With Stream
    // const rStream = fs.createReadStream("siddhant.txt");
    // lengthy Way
    // rStream.on('data',(chunkData)=> {
    //     res.write(chunkData);
    // });

    // rStream.on('end',(chunkData)=> {
    //     res.end();
    // });

    // rStream.on('error',(err)=> {
    //     log(err);
    //     res.end("File Not Found");
    // });

    // 3rd Way 
    const rStream = fs.createReadStream("siddhant.txt");
    rStream.pipe(res);
});

server.listen(8000 , "127.0.0.1");