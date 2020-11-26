'use strict';
 
const gulp = require('gulp');
const sass = require('gulp-sass');

function build() {
    return gulp.src('sass/*.scss')
    .pipe(sass().on('error',sass.logError))
    .pipe(gulp.dest('.'));
}
function watch() {
    gulp.watch('sass/*.scss', build)
}
exports.build = build;
exports.watch = watch;
