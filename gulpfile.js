//--------------------------------------------------------------------------------------------------------------------
//  gulp serve - Load up a webserver referencing build folder (dest).  Use to test the build process has worked.
//  gulp serve:dev - Load up a webserver referencing development folder (app). Watch for css and html changes and live reload.
//  gulp serve:build - Load up a webserver referencing build folder. Will run build process also.
//  gulp build - Use this command to package assets up. ie, concat, minify etc.
//--------------------------------------------------------------------------------------------------------------------

// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var bower = require('gulp-bower'),
    sass = require('gulp-sass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    browserSync = require('browser-sync').create(),
    minifyCss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    useref = require('gulp-useref'),
    gulpif = require('gulp-if'),
    minifyHtml = require('gulp-minify-html'),
    rev = require('gulp-rev'),
    jshint = require('gulp-jshint'),
    notify = require("gulp-notify"),
    del = require('del'),
    runSequence = require('run-sequence'),
    vinylPaths = require('vinyl-paths'),
    autoprefixer = require('gulp-autoprefixer'),
    pxtorem = require('gulp-pxtorem'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    uncss = require('gulp-uncss'),
    critical = require('critical'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    filter = require('gulp-filter')
    revReplace = require('gulp-rev-replace')
    webpack = require('gulp-webpack');
 
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

// Module configs.
var configs = {
  autoprefixer: {
    browsers: ['> 5%', 'last 2 versions'],
    cascade: false
  },
  minifyCss: {
    keepSpecialComments: 0,
    rebase: false,
    advanced: false
  },
  uncss: {
    html: [
      './app/index.html', 
      './app/assets/templates/**/*.html'
    ],
    ignore: [
      /.no-scroll/,
      /.navigation(?:-[a-z]*)*/,
      /.hamburger(?:-[a-z]*)*/,
      /.slick(?:-[a-z]*)*/,
      /.goto-top(?:-[a-z]*)*/,
    ]
  },
  minifyHtml: {
    empty: true,
    quotes: true,
    conditionals: true
  },
  pxtorem: {
    root_value: 10,
    prop_white_list: ['font', 'font-size', 'line-height', 'letter-spacing', 'margin', 'margin-top', 'margin-right', 'margin-bottom', 'margin-left', 'padding', 'padding-top', 'padding-right', 'padding-bottom', 'padding-left'],
    replace: false
  },
  imagemin: {
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }
};

//-----------------------------------------------------------------
//  Shared tasks.
//-----------------------------------------------------------------

// Compile sass.
gulp.task('sass', function() {
  return gulp.src(paths.cssFrom+'/**/*.scss')
  .pipe(plumber())
  .pipe(sass({
      includePaths: [
        'bower_components/bootstrap-sass-official/assets/stylesheets',
        'bower_components/fontawesome/scss'
      ]
    }))
  .pipe(autoprefixer(configs.autoprefixer))
  .pipe(pxtorem(configs.pxtorem))
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
});

// Copy fonts.
gulp.task('fonts', function() {
  return gulp.src(paths.bowerDir + '/fontawesome/fonts/**/*')
    .pipe(gulp.dest(paths.fonts));
});

// Webpack.
gulp.task('webpack', function() {
  return gulp.src(paths.js + '/entry.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(paths.js));
});

//-----------------------------------------------------------------
//  Development tasks.
//-----------------------------------------------------------------

// Fire up a web server.
gulp.task('serve:dev', function() {
  browserSync.init({
      server: {
          baseDir: "./app/"
      }
  });  

  // Watch main scss.
  gulp.watch(paths.cssFrom+'/**/*.scss', ['sass']);

  // Watch JS for changes.
  gulp.watch(paths.js + '/ng/**/*.js', ['webpack']);  
  //gulp.watch(paths.js + '/*.js', ['jshint']);  
  
  // Watch main files and reload browser.
  gulp.watch([paths.app + '/*.html', paths.cssTo + '/*.css', paths.js + '/bundle.js']).on('change', browserSync.reload);
});

//-----------------------------------------------------------------
//  Production build.
//-----------------------------------------------------------------
gulp.task('serve', function() { 
  browserSync.init({
      server: {
          baseDir: "./dist/"
      }
  }); 
});

gulp.task('serve:build', ['build'], function() { 
  browserSync.init({
      server: {
          baseDir: "./dist/"
      }
  }); 
});

gulp.task('build-clean', function () {
  return gulp.src(paths.dist +'/*')
    .pipe(gulp.dest(paths.dist +'/'))
    .pipe(vinylPaths(del));
});

// Package up js, css and minify.
gulp.task('build-package', function () {
  var jsFilter = filter("**/*.js"),
      cssFilter = filter("**/*.css"),
      assets = useref.assets();
    
  return gulp.src(paths.app + '/*.html')
    .pipe(assets)
    .pipe(jsFilter)
    .pipe(uglify())
    .pipe(jsFilter.restore())
    .pipe(cssFilter)
    .pipe(minifyCss(configs.minifyCss))
    .pipe(uncss(configs.uncss))           
    .pipe(cssFilter.restore())
    .pipe(rev())
    .pipe(assets.restore())
    .pipe(useref())
    .pipe(revReplace())
    .pipe(gulp.dest(paths.dist));
});

// Add defer to scripts to stop render blocking.
gulp.task('defer-scripts', function() {
  return gulp.src(paths.dist + '/*.html')
    .pipe(replace(/<script src=".*scripts.*"/g, function(match, p1) {
      return match +' defer></script';
    }))
    .pipe(gulp.dest(paths.dist));
});

// Minify HTML.
gulp.task('build-html', function () {   
  return gulp.src(paths.dist + '/*.html')
    .pipe(minifyHtml(configs.minifyHtml))
    .pipe(gulp.dest(paths.dist));
});

// Copy our images.
gulp.task('build-images', function () {
  return gulp.src(paths.assets + '/img/**/*')
    .pipe(imagemin(configs.imagemin))
    .pipe(gulp.dest(paths.distAssets + '/img'));
});

// Inline above the fold css.
gulp.task('critical-extract-css', function (cb) {
  critical.generateInline({
    base: './dist/',
    src: 'index.html',
    styleTarget: 'assets/css/site.css',
    htmlTarget: 'index.html',
    //extract: true,
    width: 320,
    height: 480,
    minify: true
  }, cb);
});

// Minify critical css, as it unminifies our minified css code!
gulp.task('critical-css', ['critical-extract-css'], function() {
  return gulp.src(paths.distAssets +'/css/*')
    .pipe(minifyCss(configs.minifyCss))
    .pipe(gulp.dest(paths.distAssets +'/css'));
});

// Copy the rest of the assets.
gulp.task('build-assets', function() {
  return gulp.src([paths.assets + '/**', '!'+ paths.assets + '/css/**', '!'+ paths.assets + '/img/**', '!'+ paths.assets + '/js/**'])
    .pipe(gulp.dest(paths.distAssets));
});

// Copy root files.
gulp.task('build-root', function() {
  return gulp.src([paths.app + '/.htaccess', paths.app + '/favicon.ico'])
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', function(cb) {
  runSequence(['build-clean', 'bower', 'sass'], ['fonts', 'build-images', 'build-package', 'build-assets', 'build-root'], 'defer-scripts', 'critical-css', 'build-html', cb);
});