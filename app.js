const express = require('express');
const app = express();

app.get('/', (req, res) => {   // '/' 就是homepage的意思

    //res.send('<h1>You are on the homepage.</h1>')   // res.send() 可以送html的標籤

    //res.sendFile(__dirname + '/index.html');  // res.sendFile() 可以送整個html檔案，記得要加__dirname

    let jackson = {
        name: 'Jackson',
        age: 22,
    };
    res.send(jackson);  // json格式
});

app.get('/albert', (req, res) => {
    res.send("This is Albert's page.");
});

app.get('/mike', (req, res) => {
    res.send("This is Mike's page.");
});

let port = 3000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});