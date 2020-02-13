const path = require('path');
const gulp = require('gulp');
const coveralls = require('@kollavarsham/gulp-coveralls');
const eslint = require('gulp-eslint');
const excludeGitignore = require('gulp-exclude-gitignore');
const plumber = require('gulp-plumber');
const ts = require('gulp-typescript');
const del = require('del');
const isparta = require('isparta');
const ghPages = require('gulp-gh-pages');

// Grunt is used for yuidoc doc generation and for deployment to GH pages
const gulpGrunt = require('gulp-grunt');
gulpGrunt(gulp); // add all the gruntfile tasks to gulp
const gulpGruntTasks = gulpGrunt.tasks(); // the gruntfile tasks dictionary

const tsProject = ts.createProject('tsconfig.main.json');
const tsDocsProject = ts.createProject('tsconfig.docs.json');

gulp.task('clean:dist', function (done) {
  del.sync(['dist/**']);
  done();
});

gulp.task('clean:doc', function (done) {
  del.sync(['doc/**']);
  del.sync(['es6/**']);
  done();
});

gulp.task('static', function () {
  return gulp.src('**/*.ts')
    .pipe(excludeGitignore())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});

gulp.task('watch', function () {
  gulp.watch(['lib/**/*.js', 'test/**'], ['test']);
});

gulp.task('coveralls', function (done) {
  if (!process.env.CI) {
    done();
  } else {
    return gulp.src(path.join(__dirname, 'coverage/lcov.info'))
      .pipe(coveralls());
  }
});

gulp.task('compile', function () {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest('dist'));
});

gulp.task('compile:docs', function () {
  return tsDocsProject.src()
    .pipe(tsDocsProject())
    .pipe(gulp.dest('es6'));
});

gulp.task('prepublish', gulp.series('clean:dist', 'static', 'compile'));

gulp.task('yuidoc', gulp.series('clean:doc', 'compile:docs', 'coveralls', function (done) {
  gulpGruntTasks['grunt-yuidoc'](function () {
    done();
  });
}));

gulp.task('deployDoc', gulp.series('yuidoc', function () {
  return gulp.src('./doc/**/*')
    .pipe(ghPages({
      remoteUrl : 'git@github.com:kollavarsham/kollavarsham-js.git'
    }));
}));
