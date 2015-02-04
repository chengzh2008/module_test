#! /usr/bin/env node   // jscs:disable
// jscs:enable

"use strict";

var greetObject = require("./greetObject"),
    myApp = function (input) {
    // initial the parameter
    var name = input || process.argv[2] || "anonymous",

    // call greetObject.greet
        result = greetObject.greet(name);
    console.log(result);
    // return the result for easy test
    return result;
};

myApp();

// exports this myApp function
module.exports = myApp;

