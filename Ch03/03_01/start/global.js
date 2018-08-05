var path = require("path");

var hello = "hello world from node js";
var justNode = hello.slice(17);

console.log(`Rock on world from ${justNode}`);

console.log(__dirname);
console.log(__filename);

console.log(`Rock on world from ${path.basename(__filename)}`);
console.log(path.basename(__filename));