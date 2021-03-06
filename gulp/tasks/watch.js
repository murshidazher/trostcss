var gulp = require('gulp'), // imports gulp file
  watch = require('gulp-watch'), // imports gulp-watch package
 browserSync = require('browser-sync').create();

gulp.task('watch:trost', function () {

  browserSync.init({
    notify: false,
    server: {
      baseDir: "trost"
    }
  });

  watch('./trost/**/*.html', function() {
    browserSync.reload();
  });

  watch('./src/styles/**/*.css', gulp.series(gulp.parallel('css:inject'), function () {}));

});

gulp.task('css:inject', gulp.series('build:dev', function () {
    return gulp.src('./trost/assets/styles/lib/trost.min.css').pipe(browserSync.stream());
}));

