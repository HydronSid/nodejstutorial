const { error } = require('console');
const  fs = require('fs');

// Create file using ansynchronus
fs.mkdir("Siddhant",(error)=> {
    console.log("Folder created");
})

// create file name using async
fs.writeFile("Siddhant/bio.txt","Hello my name is Siddhant",(error)=> {
    console.log("File created");
})

// append file using async
fs.appendFile("Siddhant/bio.txt",". I am flutter Developer",(error)=> {
    console.log("File Appended");
});

// read file without bufferData with async
fs.readFile("Siddhant/bio.txt","utf8",(error , data)=> {
    console.log(data);
})

// rename file using async
fs.rename("Siddhant/bio.txt","Siddhant/myBio.txt",(err)=>{
    console.log("File rename successfull");
});

// delete file using async
fs.unlink("Siddhant/myBio.txt",(error)=> {
    console.log("File Deleted.");
});

// delete Folder using async
fs.rmdir("Siddhant",(error)=> {
    console.log("Folder Deleted.");
})