let gulp = require('gulp');
let ts = require('gulp-typescript');
let tsProject = ts.createProject('tsconfig.json');

gulp.task('typescript', function () {
    return gulp.src('src/**/*.ts')
        .pipe(tsProject())
        .pipe(gulp.dest('app'));
});

gulp.task('watch', ['typescript'], function() {
    gulp.watch('src/**/*.ts', ['typescript']);
});

gulp.task('default', ['watch']);