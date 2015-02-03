"use strict";

var greetObject = exports = module.exports = {};

greetObject.greet = function(name) {
    if (name) {
        return "hello " + name;
    } else {
        return "hello there";
    }
}
