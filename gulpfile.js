gulp = require('gulp');

gulp.task('version', function() {
  return console.log(require('./package.json').version);
});