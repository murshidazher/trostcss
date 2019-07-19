let pkg = require('./../../package.json'),
 gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba'),
postcssfor = require('postcss-for'),
atVariables = require('postcss-at-rules-variables');

gulp.task('styles', function () {
    return gulp.src('./src/styles/trost.css')
    .pipe(postcss([atVariables, cssImport, mixins, postcssfor, cssvars, nested, hexrgba, autoprefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
    .pipe(gulp.dest('./dist'));
});

gulp.task('styles:trost', function () {
    return gulp.src('./src/styles/trost.css')
    .pipe(postcss([atVariables, cssImport, mixins, postcssfor, cssvars, nested, hexrgba, autoprefixer]))
        .on('error', function(errorInfo) {
            console.log(errorInfo.toString());
            this.emit('end');
        })
    .pipe(gulp.dest('./trost/assets/styles/'));
});