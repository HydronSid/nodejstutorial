const EventEmitter = require("events");
const log = console.log;

const event = new EventEmitter();

// event.on('sayMyName',()=> {
//     log("My name is Siddhant.");
// });


// event.on('sayMyName',()=> {
//     log("Sachindanand.");
// });



// event.on('sayMyName',()=> {
//     log("Mestry.");
// });

// event.emit('sayMyName');

event.on('checkPage',(st , msg)=> {
    log(`statusCode : ${st} and page is ${msg}`);
});

event.emit("checkPage",200,"ok");
