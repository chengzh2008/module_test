"use strict";

var expect = require("chai").expect,
    // greetCli = require("../lib/greetCli"),
    exec = require("child_process").exec;

describe("greetCli test", function() {
    it("should greet with input name", function() {
        var inputName = "CodeFellow"
        var child = exec("node ../lib/greetCli.js" + inputName, function(err, stdout, stderr) {
          if (err) throw err;
          console.log(stdout);
          expect(stdout).to.eql("hello " + inputName);
        });
    });

    it("should greet without input name");
});
