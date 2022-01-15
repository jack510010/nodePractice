//fs => file system 可以在javascript裡面製作一些文件

const fs = require("fs");

fs.writeFile("try.txt", "Today is a good day.", e => {
    if(e) throw e;

    console.log("file has been written.");
});