const fs = require('fs');
const log = console.log;

const bioData = {
    name : "Siddhant",
    age : 23,
}

// // convert To json
// const objectTojson = JSON.stringify(bioData);
// log(objectTojson);

// // convert To object
// const jsonToObject = JSON.parse(objectTojson);
// log(jsonToObject);


const objectTojson = JSON.stringify(bioData);

fs.writeFile("myBio.json",objectTojson,(err)=> {
    log("created file");
});

fs.readFile("myBio.json","utf8",(err , data)=> {
    log(`jsonData : ${data}`);
    const objectFile = JSON.parse(data);
    log(objectFile);
});

// fs.unlink("myBio.json",()=> log("deleted file"));




