const path = require('path');
const gulp = require('gulp');
const coveralls = require('gulp-coveralls');
const eslint = require('gulp-eslint');
const excludeGitignore = require('gulp-exclude-gitignore');
const nsp = require('gulp-nsp');
const plumber = require('gulp-plumber');
const babel = require('gulp-babel');
const del = require('del');
const isparta = require('isparta');
const ghPages = require('gulp-gh-pages');

// Grunt is used for yuidoc doc generation and for deployment to GH pages
const gulpGrunt = require('gulp-grunt');
gulpGrunt(gulp); // add all the gruntfile tasks to gulp
const gulpGruntTasks = gulpGrunt.tasks(); // the gruntfile tasks dictionary

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
