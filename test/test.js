var assert = require('assert');
var es = require('event-stream');
var gulp = require('gulp');
var File = require('vinyl');
var lunr = require('../');

describe('gulp-lunr', function() {
  it('should throw, when outputFile argument is missing', function () {
    assert.throws(function() {
      lunr();
    }, Error);
  });
});
