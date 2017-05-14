var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('delete', function(cb) {
    del('style.css', cb);
});



gulp.task('sass', function() {

    gulp.src('style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./'));
});

gulp.task('default', [ 'delete', 'sass' ]);

