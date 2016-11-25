const gulp = require('gulp');
const typescript = require('gulp-typescript');
const tscConfig = require('./tsconfig.json');
const sass   = require('gulp-sass');
const gutil = require('gulp-util');

// create a default task and just log a message
gulp.task('default', ['compile', 'build-css', 'watch'], function() {
    return gutil.log('Gulp is running!')
});

gulp.task('compile', function(){
    return gulp
        .src('public/javascripts/**/*.ts')
        .pipe(typescript(tscConfig.compilerOptions))
        .pipe(gulp.dest('public/javascripts'));
})

gulp.task('build-css', function() {
    return gulp.src('public/stylesheets/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('public//stylesheets'));
});

gulp.task('watch', function () {
    gulp.watch(["public/javascripts/**/*.ts"], ['compile']).on('change', function (e) {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.');
    });
    gulp.watch(["public/stylesheets/**/*.scss"], ["build-css"]).on('change', function (e) {
        console.log('Resource file ' + e.path + ' has been changed. Updating.');
    });
});