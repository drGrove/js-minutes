/* jshint node: true */

module.exports = function (grunt) {
  "use strict";

  grunt.initConfig({
      pkg: grunt.file.readJSON('package.json')
    , jshint: {
        all: [
            "Gruntfile.js"
          , "src/**.js"
        ]
      , options: {
          jshintrc: '.jshintrc'
        },
      }
    , jasmine: {
        src: "src/**/*.js"
      , options: {
          specs: "spec/**/*.js"
      }
    }
  })

  grunt.loadNpmTasks('grunt-contrib-jshint')
  grunt.loadNpmTasks('grunt-contrib-jasmine')

  grunt.registerTask('test', ['jshint', 'jasmine'])
  grunt.registerTask('default', ['test'])
};
