const express = require('express');
const app = express();

app.get('/', (req, res) => {   // '/' 就是homepage的意思

    
    res.send('This is homepage.')
});

app.get('/albert', (req, res) => {
    res.send("This is Albert's page.");
});

app.get('/mike', (req, res) => {
    res.send("This is Mike's page.");
});


// routing for all。 意思是所有不符合路由的網址都會到這裡來。 他要放在最後一個路由，不能放在第一個路由
app.get('*', (req,res) => {
    res.send('Cannot find what you want.');
});

// routing for all。結束----------------------------------------------------------------

let port = 3000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});