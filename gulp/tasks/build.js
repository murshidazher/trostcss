/* Gulp task to minify and export for production */
let gulp = require('gulp'),
del = require('del'),
rename = require('gulp-rename'),
cssnano = require('gulp-cssnano');



// bool flag to check whether current env is development or not
// true:        development
// false:       production
// export NODE_ENV=production
var isDebug = ((process.env.NODE_ENV || 'development').trim().toLowerCase() !== 'production');

gulp.task('delete:dist', function() {
    return del('./dist');
});

gulp.task('delete:trost-dev-css', function() {
    return del('./trost/assets/styles/');
});

gulp.task('minify:trost-dist', gulp.series('styles', function() {
    var cssfile = gulp.src(['./dist/*.css', '!./dist/*.min.css']);
            
    if(!isDebug) {
        cssfile = cssfile.pipe(cssnano()).pipe(rename({ suffix: '.min' }));
        
    }
    
    return cssfile.pipe(gulp.dest('./dist/'));
}));


gulp.task('minify:trost-dev', gulp.series('styles:trost', function() {
    var cssfile = gulp.src(['./trost/assets/styles/trost.css', '!./trost/assets/styles/*.min.css']);
            
    if(isDebug) {
        cssfile = cssfile.pipe(cssnano()).pipe(rename({ suffix: '.min' })); 
    }
    
    return cssfile.pipe(gulp.dest('./trost/assets/styles/'));
}));

gulp.task('build:dist',  gulp.series(['delete:dist', 'minify:trost-dist']));
gulp.task('build:dev',  gulp.series(['delete:trost-dev-css', 'minify:trost-dev']));







