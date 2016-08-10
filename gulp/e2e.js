var config      = require('./config');
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var nightwatch  = require('nightwatch');


gulp.task('serve:e2e', function (callback) {
    browserSync.init({
        notify: false,
        port: 9100,
        open: false,
        server: {
            baseDir: "./" + config.appPath,
            index: '/index.html'
        },
        snippetOptions: { blacklist: ['/'] },
        ui: false
    }, function() {
        callback();
    });
});


gulp.task('e2e', ['serve:e2e'], function () {
    nightwatch.runner({
        config: 'nightwatch.json',
        env: 'default'
    }, function (passed) {
        if (passed) {
            process.exit();
        }
        else {
            process.exit(1);
        }
    });
});


gulp.task('e2e:chrome', ['serve:e2e'], function () {
    nightwatch.runner({
        config: 'nightwatch.json',
        env: 'chrome'
    }, function (passed) {
        if (passed) {
            process.exit();
        }
        else {
            process.exit(1);
        }
    });
});


gulp.task('e2e:firefox', ['serve:e2e'], function () {
    nightwatch.runner({
        config: 'nightwatch.json',
        env: 'firefox'
    }, function (passed) {
        if (passed) {
            process.exit();
        }
        else {
            process.exit(1);
        }
    });
});