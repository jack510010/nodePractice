const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');  // 一開始先取得 bodyParser 的 module


app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));  // 然後寫一個middleware 去執行 bodyParser.urlencoded({extended: true})





app.get('/', (req, res) => {   
    //console.log(res.statusCode);
    res.send('this is home page');
});

app.get('/albert', (req, res) => {
    // console.log(res.statusCode);
    res.send("This is Albert's page.");
});

app.get('/mike', (req, res) => {
    res.send("This is Mike's page.");
});

app.get('*', (req, res) => {
    res.status(404);
    // console.log(res.statusCode);
    res.sendFile(path.join(__dirname, 'error.html'));
})


// 結束----------------------------------------------------------------

let port = 3000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});