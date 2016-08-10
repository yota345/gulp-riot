var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
    runSequence(
        ['clean:all', 'lint'],
        ['compile-html', 'compile-postcss', 'webpack'],
        'rev_replace'
    );
});