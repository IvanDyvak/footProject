const gulp = require('gulp');
const server = require('gulp-server-livereload');
 
gulp.task('server', function() {
  gulp.src('app/')
    .pipe(server({
      livereload: true,
      port: 7777,
      open: true
    }));
});


gulp.task('default', ['server'])
