"use strict";

var myApp = require('../greet');
var expect = require('chai').expect;

describe('myApp from greet.js', function(){
  it('should take input and greet input', function(){
    expect(myApp("world")).to.eql("hello world");
  });

  it('should grab input from process.argv', function(){
    var arg_cache;
    var somename = 'cat';
    before(function(){
      // cache the current process.argv
      arg_cache = process.argv;
      process.argv[2] = somename;
    });

    it('should grab soemname from process.argv', function() {
      expect(myApp()).to.eql("hello " + somename);
    });

    // restore the process.argv
    after(function(){
      process.argv = arg_cache;
    })
  })
})
