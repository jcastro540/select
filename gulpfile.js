var gulp = require('gulp');

gulp.task('copy-css', function(){
    return gulp.src('./*.css')
      .pipe(gulp.dest('dist/'))
  });


gulp.task('default', [ 'copy-css' ]);