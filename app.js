const url = require("url");

const pandaUrl = "http://127.0.0.1:5500/40form.html?file=&InputName=albert&gender=male&telephone=0920525290&email=aaa%40gmail.com&age=30&password=12345678&news=newspaper"

const parsedUrl = url.parse(pandaUrl, true);

console.log(typeof parsedUrl.query);