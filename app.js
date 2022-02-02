const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('You are on the homepage.')
});

let port = 3000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});