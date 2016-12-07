const gulp = require('gulp');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sass   = require('gulp-sass');
const gutil = require('gulp-util');

gulp.task('default', ['compile', 'build-css', 'watch'], function() {
    return gutil.log('Gulp is running!')
});

gulp.task('compile', function(){
    return gulp
        .src('client/javascripts/**/*.ts')
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('client/javascripts'));
})

gulp.task('build-css', function() {
    return gulp.src('client/stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('client//stylesheets'));
});

gulp.task('watch', function () {
    gulp.watch(["client/javascripts/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["client/stylesheets/**/*.scss"], ["build-css"]).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});