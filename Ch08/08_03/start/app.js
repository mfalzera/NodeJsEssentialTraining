var express = require("express");
var cors = require("cors");
var app = express();

var skierTerms = [
	{
		term: "Rip",
		defined: "Fast"
	},
	{
		term: "Huck",
		defined: "Throw"
	},
	{
		term: "Chowder",
		defined: "Powder"
	}
]


app.use(function(req, res, next) {
	console.log(`${req.method} request for '${req.url}'`);
	next();
});

app.use(express.static("./public"));
app.use(cors()); // any domain can make the request
app.get("/dictionary-api", function(req, res) {
	res.json(skierTerms);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;