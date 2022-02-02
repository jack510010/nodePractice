const express = require('express');
const app = express();

app.get('/', (req, res) => {   // '/' 就是homepage的意思
    res.send('You are on the homepage.')
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