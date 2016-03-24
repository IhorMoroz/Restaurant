'use strict';

var gulp = require('gulp'),
    bs = require('browser-sync').create(),
    rigger = require('gulp-rigger'),
    minifyCss = require('gulp-minify-css'), //gulp-clean-css need use
    concatCss = require('gulp-concat-css'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass');

gulp.task('serve', ['sass', 'html', 'js'], function() {

    bs.init({
        server: "./app"
    });

    gulp.watch("dev/scss/*.scss", ['sass']);
    gulp.watch("dev/html/*.html", ['html']);
    gulp.watch("dev/js/*.js", ['js']);
});

gulp.task('sass', function(){
    gulp.src("dev/scss/*.scss")
    .pipe(sass())
    .pipe(concatCss("main.css"))
    .pipe(autoprefixer({browsers: ['last 5 versions']}))
    //.pipe(minifyCss())
    .pipe(gulp.dest("app/css"))
    .pipe(bs.stream());
});

gulp.task('html', function(){
    gulp.src("dev/html/*.html")
    .pipe(rigger())
    .pipe(gulp.dest("app/"))
    .pipe(bs.stream());
});

gulp.task('js', function(){
    gulp.src("dev/js/*.js")
    .pipe(concat('main.js'))
    .pipe(gulp.dest("app/js"))
    .pipe(bs.stream());
});

gulp.task('default', ['serve']);
