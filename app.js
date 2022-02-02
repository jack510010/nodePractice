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
app.post('/formHandling', (req, res) => {

    //console.log(req.body); 可以看到req.body 到底長什麼樣子

    let {fullname, age} = req.body;  // 再來就是取得 req.body 裡面的東西

    res.send(`thanks for posting. Your name is ${fullname} and your age is ${age}.`);  // 就可以把用戶的資料變數拿來自己用。
});

// 結束----------------------------------------------------------------

let port = 3000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});