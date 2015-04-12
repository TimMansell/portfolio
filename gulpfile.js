//-----------------------------------------------------------------
//  gulp watch - normal command. Will watch and compile sass.
//  gulp connect - load up a webserver. Watch for css and html changes and live reload.
//  gulp build - use this command to package assets up. ie, concat, minify etc.
//-----------------------------------------------------------------

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    connect = require('gulp-connect'),
    minifyCSS = require('gulp-minify-css'),
    plumber = require('gulp-plumber');

// File destinations.
var paths = {
    cssFrom:'./app/scss',
    cssTo:'./app/css',
    img: './app/img',
    fonts: './app/fonts',
    js: './app/js'
};

// Fire up a web server.
gulp.task('connect', function() {
  connect.server({
    root: './app',
    livereload: true
  });  

  // Watch main scss.
  gulp.watch(paths.cssFrom+'/**/*.scss', ['compass']);

  // Watch css or html changes.
  gulp.watch(['./app/*.html', './app/css/*.css'], ['reload']);
});

// Live reload html.
gulp.task('reload', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// Compile compass.
gulp.task('compass', function() {
  gulp.src(paths.cssFrom+'/**/*.scss')
  .pipe(plumber())
  .pipe(compass({
    //style:'compact',
    comments:false,
    css: paths.cssTo,
    sass: paths.cssFrom,
    image: paths.img,
    font: paths.fonts
  }))
  .pipe(gulp.dest(paths.cssTo));
});

// Watch Files For Changes
gulp.task('watch', function() {
       
    // Watch main scss.
    gulp.watch(paths.cssFrom+'/**/*.scss', ['compass']);

    // Watch css or html changes.
    gulp.watch(['./app/*.html'], ['reload']);
});

// Development build.
gulp.task('build', function() {

  // TODO.

});

// Default Task
gulp.task('default', ['compass', 'watch', 'build', 'connect']);