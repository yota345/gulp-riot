var config       = require('./config');
var gulp         = require('gulp');
var notify       = require('gulp-notify');
var imagemin     = require('gulp-imagemin');


gulp.task('compile-img', function() {
return gulp.src(config.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(config.img.dest))
});