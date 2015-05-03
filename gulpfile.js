//-----------------------------------------------------------------
//  gulp watch - Will watch and compile sass.
//  gulp serve - Load up a webserver. Watch for css and html changes and live reload.
//  gulp build - Use this command to package assets up. ie, concat, minify etc.
//-----------------------------------------------------------------

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var bower = require('gulp-bower'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    connect = require('gulp-connect'),
    minifyCss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    usemin = require('gulp-usemin'),
    minifyHtml = require('gulp-minify-html'),
    rev = require('gulp-rev'),
    jshint = require('gulp-jshint'),
    notify = require("gulp-notify"),
    del = require('del'),
    runSequence = require('run-sequence'),
    vinylPaths = require('vinyl-paths'),
    autoprefixer = require('gulp-autoprefixer'),
    pixrem = require('gulp-pixrem'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    modernizr = require('gulp-modernizr'),
    uncss = require('gulp-uncss');
 
// File destinations.
var paths = new (function(){
  this.app = './app';
  this.dist = './dist';
  this.assets = this.app + '/assets';
  this.distAssets = this.dist + '/assets';
  this.cssFrom = this.app + '/scss';
  this.cssTo = this.assets + '/css';
  this.img = this.assets + '/img';
  this.fonts = this.assets + '/fonts';
  this.js = this.assets + '/js';
})();

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
      browsers: ['> 5%', 'last 2 versions'],
      cascade: false
  }))
  .pipe(pixrem())
  .pipe(gulp.dest(paths.cssTo));
});

// Lint our JS
gulp.task('jshint', function() { 
  return gulp.src(paths.js + '/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// Install bower packages.
gulp.task('bower', function() {
  return bower();
    //.pipe(gulp.dest(paths.devThemeDir + paths.bowerDir))
});

// Create custom modernizr file.
gulp.task('modernizr', function() {
  return gulp.src(paths.js +'/**/*.js')
    .pipe(modernizr('modernizr-custom.js', {
          "cache" : true,
          "devFile" : false,
          "dest" : false,
          "options" : [
              "setClasses",
              "html5printshiv",
              "addTest",
              "testProp",
              "fnBind"
          ],
          "tests" : [
            "svg"
          ],
          "useBuffers": false
      }))
    .pipe(uglify())
    .pipe(gulp.dest(paths.js));
});

// Copy fonts.
gulp.task('fonts', function() {
  return gulp.src(paths.bowerDir + '/fontawesome/fonts/**/*')
    .pipe(gulp.dest(paths.fonts));
});

//-----------------------------------------------------------------
//  Development tasks.
//-----------------------------------------------------------------

// Fire up a web server.
gulp.task('serve', function() {
  connect.server({
    root: paths.app,
    livereload: true
  });    

  // Watch main scss.
  gulp.watch(paths.cssFrom+'/**/*.scss', ['compass']);

  // Watch main scss.
  gulp.watch([paths.app + '/*.html', paths.cssTo + '/*.css'], ['reload']);

  // Watch JS for changes.
  gulp.watch(paths.js + '/*.js', ['jshint']);  
});

// Live reload html.
gulp.task('reload', function () {
  gulp.src(paths.app + '/*.html')
    .pipe(connect.reload());
});

// Watch Files For Changes.
gulp.task('watch', function() {
       
  // Watch main scss.
  gulp.watch(paths.cssFrom+'/**/*.scss', ['compass']);

  // Watch css or html changes.
  gulp.watch([paths.app + '/*.html', paths.cssTo + '/*.css'], ['reload']);   
});


//-----------------------------------------------------------------
//  Production build.
//-----------------------------------------------------------------

gulp.task('build-clean', function () {
  return gulp.src(paths.dist +'/*')
    .pipe(gulp.dest(paths.dist +'/'))
    .pipe(vinylPaths(del));
});

gulp.task('build-minify', function () {
  return gulp.src(paths.app + '/index.html')
    .pipe(usemin({
      css: [minifyCss(), 'concat'],
      js: [uglify(), rev()],
      html: [minifyHtml({empty: true})],
    }))
    .pipe(gulp.dest(paths.dist +'/'));
});

// Copy our images.
gulp.task('build-images', function () {
  gulp.src(paths.assets + '/img/**/*')
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()]
    }))
    .pipe(gulp.dest(paths.distAssets + '/img'));
});

// Remove unused CSS.
gulp.task('uncss', function() {
  return gulp.src(paths.cssTo + '/**/*.css')
    .pipe(uncss({
        html: [
          './app/index.html', 
          './app/assets/templates/**/*.html'
        ],
        ignore: [
          '.no-scroll',
          /.navigation(?:-[a-z]*)*/,
          /.hamburger(?:-[a-z]*)*/,
          /.slick(?:-[a-z]*)*/,
        ]
    }))
    .pipe(gulp.dest(paths.cssTo));
});

// Copy the rest of the assets.
gulp.task('build-assets', function(callback) {
  gulp.src([paths.assets + '/**', '!'+ paths.assets + '/css/**', '!'+ paths.assets + '/img/**', '!'+ paths.assets + '/js/**'])
    .pipe(gulp.dest(paths.distAssets));

    callback();
});

gulp.task('build', function() {
  runSequence(['build-clean', 'bower', 'compass', 'modernizr'], 'uncss', ['fonts', 'build-images', 'build-minify'], 'build-assets');
});