# gulp-lunr  

create a [lunr.js](http://lunrjs.com/) index from vinyl file streams using gulp

## Example gulpfile

```js
var gulp = require('gulp');
var lunr = require('gulp-lunr');

gulp.task('lunr', function() {
  return gulp.src('docs/*')
    .pipe(lunr('index.json', function(file) {
      var contents = file.contents.toString().split('\n');
      return {
        fields: {
          title: { value: contents[0], boost: 10 },
          body: { value: contents.slice(1).join('\n'), boost: 0 }
        },
        ref: { type: 'href', value: file.relative }
      }
    }))
    .pipe(gulp.dest('./'));
});
```

## API

### `lunr(targetFile, constructor)`

`targetFile`: the name of the file you'd like to write you index to. Throws a warning when no file is provided.  

`constructor`: defines both the configuration of the lunr.js index object, as well as the values to be used for each field when a new document is added. Takes a file as an argument. Returned object must contain at least 1 field and a `ref` to uniquely identify each object.

(this repo is a WIP)
