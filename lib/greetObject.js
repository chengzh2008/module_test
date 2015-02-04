"use strict";

var greetObject = exports = module.exports = {};

greetObject.greet = function(name) {
  var input;
  if (name) {
    input = " " + name;
  } else {
    input = "";
  }
  return "hello" + input;
}
