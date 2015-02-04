"use strict";

var greetObject = exports = module.exports = {}; // jshint ignore:line

greetObject.greet = function (name) {
    var input;
    if (name) {
        input = " " + name;
    } else {
        input = "";
    }
    return "hello" + input;
};
