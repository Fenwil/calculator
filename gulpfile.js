const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('minify-css', () => {
    gulp.src('src/css/styles.css')
        .pipe(cleanCSS())
        .pipe(rename('styles.min.css'))
        .pipe(gulp.dest('dist/css'))
})

gulp.task('minify-js', () => {
    gulp.src('src/js/app.js')
        .pipe(uglify())
        .pipe(rename('app.min.js'))
        .pipe(gulp.dest('dist/js'))
})

gulp.task('default', ['minify-css', 'minify-js'], () => {
    gulp.watch('src/css/styles.css', ['minify-css'])
    gulp.watch('src/js/app.js', ['minify-js'])
});