var config       = require('./config');
var gulp         = require('gulp');
var rename       = require('gulp-rename');
var rev          = require('gulp-rev');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssnano      = require('cssnano');
var nested       = require('postcss-nested');
var cssnext      = require("gulp-cssnext");
var simpleVars   = require("postcss-simple-vars");
var mixin        = require('postcss-mixins');
var notify       = require('gulp-notify');
var customProperties  = require("postcss-custom-properties");
var customMedia       = require("postcss-custom-media");
var colorRgbaFallback = require("postcss-color-rgba-fallback");
var pixrem            = require('pixrem');


gulp.task('compile-postcss', function () {
    var processors = [
        autoprefixer({browsers: ['last 2 versions', '> 2%']}),
        cssnano(),
        nested,
        simpleVars,
        mixin,
        customProperties,
        customMedia,
        colorRgbaFallback,
        pixrem
    ];

    return gulp.src(config.stylesheet.srcPost)
        .pipe(cssnext({
            compress: false,
            import: true
        }))
        .pipe(postcss(processors))
        .pipe(rename({ suffix: '.bundle' }))
        .pipe(rev())
        .pipe(gulp.dest(config.stylesheet.dest))
        .pipe(rev.manifest(config.rev.dest, config.rev.opts))
        .pipe(gulp.dest(config.appPath))
        .pipe(notify('Finished compiling post-css'));

});