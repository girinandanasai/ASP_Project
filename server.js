port = 8080;
var express = require("express");
var app = express();
app.use(express.static(__dirname));
app.listen(port);
console.log("server running on port: " + port);
