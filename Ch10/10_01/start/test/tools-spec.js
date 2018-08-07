var expect = require("chai").expect;
var tools = require("../lib/tools");

describe("printName()", function() {
    it("should print the last name first", function() {
        var results = tools.printName({ first: "Mike", last: "Falzerano" });
        expect(results).to.equal("Falzerano, Mike");
    }); // stub your test

});