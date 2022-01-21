const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())

app.get('/',cors(), function (req, res) {
  res.send('Hello World5')
})
console.log("serve is on : http://localhost:3000/" );
app.listen(3000)