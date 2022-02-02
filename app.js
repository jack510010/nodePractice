const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {

    if (req.url == '/') {
        fs.readFile(path.join(__dirname, 'index.html'), (err, data) => {
            res.writeHead(200, {
                'Content-Type': 'text/html'
            }); // 寫檔頭，『{'Content-Type': 'text/html'}』，語法容易忘記要記一下。text/html可以換成別的方式
            res.write(data);

            res.end();
        })

    } else {
        let parsedUrl = url.parse(req.url);

        res.write('Hello, ' + parsedUrl.pathname);
        res.end();
    }

});

server.listen(3501, () => {
    console.log('server is running on 3501.');
}); // listen()監聽的是port number