const os = require('os');

console.log(`Architecture : ${os.arch()}`);
console.log(`Free Memory : ${os.freemem()/1024/1024/1024}`);
// console.log(os.cpus());
console.log(`Home Directory : ${os.homedir()}`);
console.log(`Host Name : ${os.hostname()}`);
console.log(`Machine : ${os.machine()}`);
console.log(`Platform : ${os.platform()}`);
console.log(`Release : ${os.release()}`);
console.log(`Temp Directory : ${os.tmpdir()}`);
console.log(`Total Memory : ${os.totalmem()}`);
console.log(`OS Type : ${os.type()}`);
console.log(`User Info : ${os.userInfo()}`);