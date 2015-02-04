"use strict";

module.exports = function(grunt) {
  // let grunt load npm tasks
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');

  // grunt initilization
  grunt.initConfig({
    jshint: {
      dev: {
        options: {
          node: true,
          globals: {
            describe: true,
            it: true,
            before: true,
            after: true
          }
        },
        src: ['Gruntfile.js', 'lib/**/*.js', 'test/**/*.js', 'index.js']
      }
    },
    simplemocha: {
      all: {
        src: ['test/**/*.js']
      }
    }
  });

  // register the tasks
  grunt.registerTask('test', ['jshint', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
