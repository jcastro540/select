var gulp = require('gulp');

gulp.task('copy-html', function(){
  return gulp.src('./*.html')
    .pipe(gulp.dest('dist/'))
});

gulp.task('copy-css', function(){
    return gulp.src('./*.css')
      .pipe(gulp.dest('dist/'))
  });


gulp.task('default', [ 'copy-html', 'copy-css' ]);