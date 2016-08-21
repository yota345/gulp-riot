var config      = require('./config');
var gulp        = require('gulp');
var revReplace  = require('gulp-rev-replace');
var notify      = require('gulp-notify');


gulp.task('rev_replace', function(){
    var manifest = gulp.src(config.rev.dest);
    return gulp.src(config.revReplace.src)
        .pipe(revReplace({manifest: manifest}))
        .pipe(gulp.dest(config.revReplace.dest))
        .pipe(notify('Finished compile.'));
});