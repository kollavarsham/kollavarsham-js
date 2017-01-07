var path = require('path');
var gulp = require('gulp');
var coveralls = require('gulp-coveralls');
var eslint = require('gulp-eslint');
var excludeGitignore = require('gulp-exclude-gitignore');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');
var nsp = require('gulp-nsp');
var plumber = require('gulp-plumber');
var babel = require('gulp-babel');
var del = require('del');
var isparta = require('isparta');
var ghPages = require('gulp-gh-pages');

// Initialize the babel transpiler so ES2015 files gets compiled
// when they're loaded
require('babel-core/register');

// Grunt is used for yuidoc doc generation and for deployment to GH pages
var gulpGrunt = require('gulp-grunt');
gulpGrunt(gulp); // add all the gruntfile tasks to gulp
var gulpGruntTasks = gulpGrunt.tasks(); // the gruntfile tasks dictionary

gulp.task('clean:dist', function () {
  return del.sync(['dist/**']);
});

gulp.task('clean:doc', function () {
  return del.sync(['doc/**']);
});

gulp.task('static', function () {
  return gulp.src('**/*.js')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('nsp', function (cb) {
  nsp({package : path.resolve('package.json')}, cb);
  // gulpNSP({package : __dirname + '/package.json'}, cb);
});

gulp.task('pre-test', function () {
  return gulp.src('lib/**/*.js')
    .pipe(excludeGitignore())
    .pipe(istanbul({
      includeUntested : true,
      instrumenter    : isparta.Instrumenter
    }))
    .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], function (cb) {
  var mochaErr;

  gulp.src('test/**/*.js')
    .pipe(plumber())
    .pipe(mocha({reporter : 'spec'}))
    .on('error', function (err) {
      mochaErr = err;
    })
    .pipe(istanbul.writeReports())
    .on('end', function () {
      cb(mochaErr);
    });
});

gulp.task('watch', function () {
  gulp.watch(['lib/**/*.js', 'test/**'], ['test']);
});

gulp.task('coveralls', function () {
  if (!process.env.CI) {
    return;
  }

  return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
    .pipe(coveralls());
});

gulp.task('babel', function () {
  return gulp.src('lib/**/*.js')
    .pipe(babel())
    .pipe(gulp.dest('dist'));
});


gulp.task('yuidoc', ['clean:doc', 'prepublish', 'coveralls'], function (cb) {
  gulpGruntTasks['grunt-yuidoc'](function () {
    cb();
  });
});

gulp.task('deployDoc', ['yuidoc'], function () {
  return gulp.src('./doc/**/*')
    .pipe(ghPages({
      remoteUrl : 'git@github.com:kollavarsham/kollavarsham-js.git'
    }));
});

gulp.task('prepublish', ['clean:dist', 'nsp', 'babel']);

gulp.task('default', ['static', 'test']);
