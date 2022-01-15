//fs => file system 可以在javascript裡面製作一些文件

const fs = require("fs");

fs.readFile("./try.txt", "utf8", (e, data) => {
    if(e) throw e;
    console.log(data);
});