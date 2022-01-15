//! 任何會要求你登入的網站基本上都是動態網站。 in English meaning.  Any kind of websites that require you to login is somehow dynamic.
//* 例如 facebook 跟 YouTube 都是 dynamic websites。

const path = require("path/posix");

// Module Wrapper


/*

The module wrapper#
Before a module's code is executed, Node.js will wrap it with a function wrapper that looks like the following:
(function(exports, require, module, __filename, __dirname) {});


By doing this, Node.js achieves a few things:

It keeps top-level variables (defined with var, const or let) scoped to the module rather than the global object.
It helps to provide some global-looking variables that are actually specific to the module, such as:

The module and exports objects that the implementor can use to export values from the module.
The convenience variables __filename and __dirname, containing the module's absolute filename and directory path.
*/

(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});

// path.join() 意思基本上就是把兩個path相加在一起。而且他會return一個值，例如：/Users/yungchen/Desktop/Node-js/Albert.js。
// node.js 『path』是內建的function

/*
let path = require("path");

! console.log(path.extname(__filename));   會呈現.js  .css  .html  .php  等等

! console.log(path.basename(__filename));  會呈現檔名 例如 app.js  index.html  style.css

! console.log(__filename); 會呈現完整的資料夾路徑  例如 /Users/yungchen/Desktop/Node-js/app.js

! console.log(__dirname); 會呈到父層的資料夾路徑  例如 /Users/yungchen/Desktop/Node-js

* 上述四個呈現出來的東西是不同的
https://nodejs.org/dist/latest-v16.x/docs/api/path.html#pathextnamepath 這裡有很多path的用法，雖然是英文
*/
//-------------------------------------------------------------------------------------------------------
/*
const url = require("url");

const pandaUrl = "http://127.0.0.1:5500/40form.html?file=&InputName=albert&gender=male&telephone=0920525290&email=aaa%40gmail.com&age=30&password=12345678&news=newspaper"

const parsedUrl = url.parse(pandaUrl, true);

! console.log(parsedUrl.host); 其結果是127.0.0.1:5500。 可以得到網址的前半段

! console.log(parsedUrl.hostname); 其結果是127.0.0.1。 差別在於有無port，就是埠號『:5500』

! console.log(parsedUrl.pathname); 其結果是/40form.html。 可以得到檔名

! console.log(parsedUrl.path); 其結果是/40form.html?file=&InputName=albert&gender=male&telephone=0920525290&email=aaa%40gmail.com&age=30&password=12345678&news=newspaper。 問號後面那串全部都有。

! console.log(parsedUrl.query);  其結果是 [Object: null prototype] {
  file: '',
  InputName: 'albert',
  gender: 'male',
  telephone: '0920525290',
  email: 'aaa@gmail.com',
  age: '30',
  password: '12345678',
  news: 'newspaper'}
! 可以得到query?問號後面那串的值
*/
//------------------------------------------------------------------------------------------------

/* 
fs => file system 可以在javascript裡面製作一些文件，可以做文字的紀錄

const fs = require("fs");

*fs.writeFile() 『writeFile』意思就是要寫一個文件

*fs.writeFile()的括弧裡面有好幾個參數

*fs.writeFile("第一個是file的名稱", "第二個是你要寫進去的文字", "第三個是要放入一個function")
function可以是Anonymous、normal、error

例如：fs.writeFile("try.txt", "Today is a good day.", e => {
    if(e) throw e;

    console.log("file has been written.");
});
*/