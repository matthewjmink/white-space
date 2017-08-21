var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var autoprefixer = require('gulp-autoprefixer');

var config = {
    src: {
        scss: './src/**/*.scss'
    },
    dist: './dist'
};

gulp.task('build-sass', function () {
    return gulp.src(config.src.scss)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest(config.dist))
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.dist));
});

gulp.task('styles', ['build-sass']);

gulp.task('clean', function () {
    return gulp.src(config.dist, {read: false})
        .pipe(clean());
});

gulp.task('default', function (){
    gulp.run('clean');
    gulp.run('styles');
    gulp.watch(config.src.scss, ['clean', 'styles']);
});
