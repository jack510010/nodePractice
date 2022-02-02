const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');  // 一開始先取得 bodyParser 的 module


app.use(bodyParser.urlencoded({extended: true}));  // 然後寫一個middleware 去執行 bodyParser.urlencoded({extended: true})





app.get('/', (req, res) => {   

    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/albert', (req, res) => {
    res.send("This is Albert's page.");
});

app.get('/mike', (req, res) => {
    res.send("This is Mike's page.");
});


// routing for query 
app.get('/formHandling', (req, res) => {
    //console.log(req.query); // 看看req.query 到底長什麼樣子

    let {fullname, age} = req.query;
    res.send('thanks for sending data. ' + `Nice too meet you ${fullname}. I'm ${age} years old too.`)
   
});

// 結束----------------------------------------------------------------

let port = 3000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});