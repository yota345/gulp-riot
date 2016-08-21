var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function() {
    runSequence(
        ['clean:all'],
        ['compile-html', 'lint'],
        ['compile-img', 'compile-postcss'],
        'webpack',
        'rev_replace'
    );
});