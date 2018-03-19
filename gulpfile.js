
var gulp = require('gulp'),
	concatCss = require('gulp-concat-css'),
	minifyCSS = require('gulp-clean-css');

gulp.task('default', function () {
 return gulp.src('public_html/css/**/*.css')
   .pipe(concatCss("styles.min.css"))
   .pipe(minifyCSS({
            keepBreaks: true
        }))
   .pipe(gulp.dest('public_html/out/styles'));
});