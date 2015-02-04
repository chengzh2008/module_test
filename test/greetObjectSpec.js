"use strict";

var expect = require("chai").expect,
    greetObject = require("../lib/greetObject");

describe("greetObject test", function() {
    it("should greet with input name", function() {
        expect(greetObject.greet("javascript")).to.eql("hello javascript");
    });

    it("should greet without input name", function() {
        expect(greetObject.greet()).to.eql("hello");
    });

    it("should greet with a command line input", function() {
        var input = process.argv[2] = "car";
        expect(greetObject.greet(input)).to.eql("hello " + input);
    });
});
