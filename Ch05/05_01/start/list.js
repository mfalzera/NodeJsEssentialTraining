var fs = require('fs');
var path = require('path');
// needed for debug console
var files = fs.readdirSync(path.join(__dirname, 'lib'));
fs.readdir(path.join(__dirname, 'lib'), function(err, files) {
    if (err) {throw err;}
    console.log("async");
    console.log(files);
});

var files = fs.readdirSync(path.join(__dirname, 'lib'));

// can be used for terminal
// var files2 = fs.readdirSync('./lib');
console.log(files);