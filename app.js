
const express = require("express");
const morgan = require("morgan");
const parser = require("body-parser")

const app = express();
var html_dir = './public/';

app.use(morgan("short"));
app.use(parser.urlencoded({ extended: false }));
app.use(express.static("./public"));

app.get('/', function (req, res) {
  res.sendfile(html_dir + 'fibonacci.html');
});

app.listen(3002);

console.log("App running at Port 3002");




