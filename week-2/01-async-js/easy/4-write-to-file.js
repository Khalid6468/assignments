const fs = require('fs');

fs.writeFile('./4-file-to-write.txt', " This is some sample data to be written into a file", (err) => {
    if(err)
        console.log(err);
    console.log("YEEEEEEEHAAAAAWWWW");
})