var config      = require('./config');
var gulp        = require('gulp');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();


gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: "./" + config.appPath,
            index: '/index.html'
        }
    });


    gulp.watch(config.watch.srcPost, function() {
        runSequence(
            'clean:styles',
            'compile-html',
            'compile-postcss',
            'rev_replace'
        );
    });


    gulp.watch(config.watch.srcScripts, function() {
        runSequence(
            'lint',
            'clean:scripts',
            'compile-html',
            'webpack',
            'rev_replace'
        );
    });


    gulp.watch(config.watch.srcImg, function() {
        runSequence(
            'clean:img',
            'compile-img'
        );
    });


    gulp.watch(config.watch.browserSync).on('change', browserSync.reload);
});