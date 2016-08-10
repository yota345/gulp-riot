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


    gulp.watch(config.watch.srcCss, function() {
        runSequence(
            'clean:styles',
            ['compile-html', 'compile-postcss'], 
            'rev_replace'
        );
    });


    gulp.watch(config.watch.srcScripts, function() {
        runSequence(
            ['clean:scripts', 'lint'],
            ['compile-html', 'webpack'],
            'rev_replace'
        );
    });


    gulp.watch(config.watch.browserSync).on('change', browserSync.reload);
});