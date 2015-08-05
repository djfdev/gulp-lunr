'use strict';

var through = require('through');
var gutil = require('gulp-util');
var lunr = require('lunr');
var File = gutil.File;
var PluginError = gutil.PluginError;

module.exports = function(targetFile) {

  if (!targetFile) {
    throw new PluginError('gulp-lunr', 'Missing outputFile option for gulp-lunr');
  }

  var index;

  function add(file) {

    if (!index) {
      index = lunr(function() {
        this.field('body');
        this.ref('href');
      });
    }

    index.add({
      body: file.contents.toString(),
      href: file.path
    });

    return;
  }

  function end() {

    var content = new Buffer(JSON.stringify(index.toJSON()));

    var target = new File();

    target.path = targetFile;
    target.contents = content;

    this.emit('data', target);
    this.emit('end');
  }

  return through(add, end);
};
