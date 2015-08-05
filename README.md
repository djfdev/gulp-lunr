# gulp-lunr  

create a [lunr.js](http://lunrjs.com/) index from vinyl file streams using gulp

>**Note:** this plugin is still udner development.

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
