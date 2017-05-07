var gulp = require('gulp');
var ts = require('gulp-typescript');
var tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function () {
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('built'));
});

gulp.task('watch', ['typescript'], function() {
    gulp.watch('src/**/*.ts', ['typescript']);
});

gulp.task('default', ['watch'], function () {

});