var express = require("express");

var app = express();  // creates an instance of an express application

app.use(function(req, res, next) {
    console.log(`${req.method} request for '${req.url}'`);
    next();
});

app.use(express.static("./public"));

app.listen(3000);

console.log("Express 3000");

module.exports = app;