var config = require('./config');
var gulp   = require('gulp');
var notify = require('gulp-notify');


gulp.task('compile-html', function() {
return gulp.src(config.html.src)
    .pipe(notify('Started to compile'))
    .pipe(gulp.dest(config.html.dest))
});