const path = require('path');

// To get directory name from file
console.log(path.dirname("/users/Downloads/40.jpg"));

// To get extension name from file
console.log(path.extname("/users/Downloads/40.jpg"));

// To get base name from file
console.log(path.basename("/users/Downloads/40.jpg"));

// to get all details about filr path
console.log(path.parse("/users/Downloads/40.jpg"));

const myPath = path.parse("/users/Downloads/40.jpg");
console.log(myPath.name);