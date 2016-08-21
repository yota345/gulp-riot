var config  = require('./config');
var gulp    = require('gulp');
var del     = require('del');


gulp.task('clean:all', function() {
    del(config.appPath + '/index.html')
    del(config.appPath + '/img/*')
    del(config.appPath + '/scripts/*')
    return del(config.appPath + '/styles/*');
});


gulp.task('clean:styles', function() {
    del(config.appPath + '/index.html')
    return del(config.appPath + '/styles/*');
});


gulp.task('clean:scripts', function() {
    del(config.appPath + '/index.html')
    return del(config.appPath + '/scripts/*');
});


gulp.task('clean:img', function() {
    return del(config.appPath + '/img/*');
});