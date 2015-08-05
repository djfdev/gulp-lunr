# gulp-lunr  

create a [lunr.js](http://lunrjs.com/) index from vinyl file streams using gulp

>**Note:** this plugin is still under development.

## Example gulpfile

```js
var gulp = require('gulp');
var lunr = require('gulp-lunr');

gulp.task('lunr', function() {
  return gulp.src('docs/*')
    .pipe(lunr('index.json'))
    .pipe(gulp.dest('./'));
});
```
