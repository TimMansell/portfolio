//-----------------------------------------------------------------
//  gulp watch - Will watch and compile sass.
//  gulp serve - Load up a webserver. Watch for css and html changes and live reload.
//  gulp build - Use this command to package assets up. ie, concat, minify etc.
//-----------------------------------------------------------------

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    minifyCss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    usemin = require('gulp-usemin'),
    rev = require('gulp-rev'),
    jshint = require('gulp-jshint'),
    notify = require("gulp-notify"),
    del = require('del'),
    runSequence = require('run-sequence'),
    vinylPaths = require('vinyl-paths'),
    autoprefixer = require('gulp-autoprefixer'),
    pixrem = require('gulp-pixrem');
 
// File destinations.
var paths = {
    cssFrom:'./app/scss',
    cssTo:'./app/css',
    img: './app/img',
    fonts: './app/fonts',
    js: './app/js'
};

//-----------------------------------------------------------------
//  Shared tasks.
//-----------------------------------------------------------------

// Compile compass.
gulp.task('compass', function() {
  return gulp.src(paths.cssFrom+'/**/*.scss')
  .pipe(plumber())
  .pipe(compass({
    comments:false,
    css: paths.cssTo,
    sass: paths.cssFrom,
    image: paths.img,
    font: paths.fonts
  }))
  .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
  }))
  .pipe(pixrem())
  .pipe(gulp.dest(paths.cssTo));
});

// Lint our JS
gulp.task('jshint', function() {
  return gulp.src('./dist/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({
        title: 'JSHint',
        message: 'JSHint Passed. Let it fly!',
    }));
});

//-----------------------------------------------------------------
//  Development tasks.
//-----------------------------------------------------------------

// Fire up a web server.
gulp.task('serve', function() {
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

// Watch Files For Changes.
gulp.task('watch', function() {
       
    // Watch main scss.
    gulp.watch(paths.cssFrom+'/**/*.scss', ['compass']);

    // Watch css or html changes.
    gulp.watch(['./app/*.html', './app/css/*.css'], ['reload']);
});


//-----------------------------------------------------------------
//  Production build.
//-----------------------------------------------------------------

gulp.task('build-clean', function () {
  return gulp.src('dist/*')
    //.pipe(stripDebug())
    .pipe(gulp.dest('dist'))
    .pipe(vinylPaths(del));
});

gulp.task('build-minify', function () {
  return gulp.src('./app/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      js: [uglify(), rev()]
    }))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build', function() {
  runSequence(['build-clean', 'compass'], 'build-minify');
});