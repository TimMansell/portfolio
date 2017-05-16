//--------------------------------------------------------------------------------------------------------------------
//  gulp serve - Load up a webserver referencing build folder (dest).  Use to test the build process has worked.
//  gulp serve:dev - Load up a webserver referencing development folder (app). Watch for css and html changes and live reload.
//  gulp serve:build --prod - Load up a webserver referencing build folder. Will run build process also.
//  gulp build --prod - Use this command to package assets up. ie, concat, minify etc.
//--------------------------------------------------------------------------------------------------------------------

// Include gulp
var gulp = require('gulp'); 

var argv = require('yargs').argv;

// Include Our Plugins
var sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    minifyCss = require('gulp-minify-css'),
    plumber = require('gulp-plumber'),
    gulpif = require('gulp-if'),
    minifyHtml = require('gulp-minify-html'),
    eslint = require('gulp-eslint'),
    del = require('del'),
    runSequence = require('run-sequence'),
    autoprefixer = require('gulp-autoprefixer'),
    pxtorem = require('gulp-pxtorem'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    uncss = require('gulp-uncss'),
    critical = require('critical').stream,
    webpack = require('webpack-stream');
 
// File destinations.
var paths = new (function(){
  this.app = './app';
  this.dist = './dist';
  this.assets = this.app + '/assets';
  this.distAssets = this.dist + '/assets';
  this.cssFrom = this.app + '/scss';
  this.cssTo = this.distAssets + '/css';
  this.img = this.distAssets + '/img';
  this.fonts = this.distAssets + '/fonts';
  this.jsFrom = this.assets + '/js';
  this.jsTo = this.distAssets + '/js';
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
      './app/**/*.html'
    ],
    ignore: [
      /.no-scroll/,
      /.navigation(?:-[a-z]*)*/,
      /.hamburger(?:-[a-z]*)*/,
      /.slick(?:-[a-z]*)*/,
      /.goto-top(?:-[a-z]*)*/,
      /.hidden(?:-[a-z]*)*/,
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
        'node_modules'
      ]
    }))
  .pipe(autoprefixer(configs.autoprefixer))
  .pipe(pxtorem(configs.pxtorem))
  .pipe(gulpif(argv.prod, minifyCss(configs.minifyCss) ))
  .pipe(gulpif(argv.prod, uncss(configs.uncss)))
  .pipe(gulp.dest(paths.cssTo));
});

// Lint our JS
gulp.task('eslint', function() { 
  return gulp.src(paths.jsFrom + '/**/*.js')
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format());
});

// Copy fonts.
gulp.task('fonts', function() {
  return gulp.src('./node_modules/font-awesome/fonts/**/*')
    .pipe(gulp.dest(paths.fonts));
});

// Webpack.
gulp.task('webpack', function() {
  return gulp.src(paths.jsFrom + '/app.js')
    .pipe(plumber())
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(paths.jsTo));
});

gulp.task('webpack404', function() {
  return gulp.src(paths.jsFrom + '/entry404.js')
    .pipe(webpack( require('./webpack.config.js') ))
    .pipe(gulp.dest(paths.jsTo));
});

//-----------------------------------------------------------------
//  Development tasks.
//-----------------------------------------------------------------

// Fire up a web server.
gulp.task('serve:dev', function(cb) {
  runSequence('build-clean', ['webpack', 'sass'], ['fonts', 'build-images', 'build-assets'], 'build-html', 'serve', 'watch', cb);
});

gulp.task('watch', function(cb) { 
  // Watch main scss.
  gulp.watch(paths.cssFrom+'/**/*.scss', ['sass']);

  // Watch JS for changes.
  gulp.watch(paths.jsFrom + '/**/*.js', ['webpack']);  

  // Watch HTML for changes.
  gulp.watch(paths.app + '/*.html', ['build-html']);  
    
  // Watch main files and reload browser.
  gulp.watch([paths.dist + '/*.html', paths.cssTo + '/*.css', paths.jsTo + '/bundle.js']).on('change', browserSync.reload);

  cb();
});

//-----------------------------------------------------------------
//  Production build.
//-----------------------------------------------------------------
gulp.task('serve', function(cb) { 
  browserSync.init({
      server: {
          baseDir: "./dist/"
      }
  }); 

  cb();
});

gulp.task('serve:build', ['build'], function() { 
  runSequence('serve');
  // browserSync.init({
  //     server: {
  //         baseDir: "./dist/"
  //     }
  // }); 
});

gulp.task('build-clean', function () {
  return del([
    paths.dist +'/**/*'
  ]);
});

// Minify HTML.
gulp.task('build-html', function () {   
  return gulp.src(paths.app + '/*.html')
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
// gulp.task('critical-extract-css', function (cb) {
//   return gulp.src(paths.dist+'/index.html')
//         .pipe(critical({
//           base: './dist/', 
//           inline: true, 
//           css: ['./dist/assets/css/main.css']
//          }))
//         .on('error', err => console.log(err.message) )
//         .pipe(gulp.dest(paths.dist));
// });

// // Minify critical css, as it unminifies our minified css code!
// gulp.task('critical-css', ['critical-extract-css'], function() {
//   return gulp.src(paths.distAssets +'/css/*')
//     .pipe(minifyCss(configs.minifyCss))
//     .pipe(gulp.dest(paths.distAssets +'/css'));
// });

// Copy the rest of the assets.
gulp.task('build-assets', function() {
  return gulp.src([paths.assets + '/**', '!'+ paths.assets + '/css/**', '!'+ paths.assets + '/img/**', '!'+ paths.assets + '/js/**'])
    .pipe(gulp.dest(paths.distAssets));
});

// Copy root files.
gulp.task('build-root', function() {
  return gulp.src([paths.app + '/favicon.ico', paths.app + '/CNAME'])
    .pipe(gulp.dest(paths.dist));
});

gulp.task('build', function(cb) {
  runSequence(['build-clean'], ['webpack', 'sass'], ['fonts', 'build-images', 'build-assets', 'build-root', 'build-html'], cb);
});