"use strict";

var greetObject = require("./greetObject"),
    args = process.argv,
    input;
if (args.length >= 3) {
    input = args[2];
} else {
    input = "";
}
console.log(greetObject.greet(input));
