"use strict";

var expect = require("chai").expect,
    greetObject = require("../lib/greetObject");

describe("greetObject test", function() {
    it("should greet with input name", function() {
        expect(greetObject.greet("javascript")).to.eql("hello javascript");
    });

    it("should greet without input name", function() {
        expect(greetObject.greet()).to.eql("hello there");
    });
});
