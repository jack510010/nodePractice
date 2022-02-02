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


// routing for pattern。 
app.get('/:fruit/:someFruit', (req, res) => {
    console.log(req.params);
    //res.send("you're looking for " + req.params.someFruit + '.')
    res.send('you are looking for what? ' + `<p>${req.params.fruit}</p>` + 'What kind of fruit? ' + `<p>${req.params.someFruit}</p>`)
});

// routing for all。結束----------------------------------------------------------------

let port = 3000
app.listen(port, ()=>{
    console.log(`server is running on port ${port}`);
});