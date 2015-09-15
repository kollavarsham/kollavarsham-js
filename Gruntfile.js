/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2015 The Kollavarsham Team
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
  // Show elapsed time at the end
  require('time-grunt')(grunt);
  // Load all grunt tasks
  require('load-grunt-tasks')(grunt);

  // Project configuration.
  grunt.initConfig({
    pkg          : grunt.file.readJSON('package.json'),
    yuidoc       : {
      compile : {
        name        : '<%= pkg.name %>',
        description : '<%= pkg.description %>',
        version     : '<%= pkg.version %>',
        url         : '<%= pkg.homepage %>',
        options     : {
          paths    : 'lib',
          themedir : 'themes/kollavarsham',
          outdir   : 'doc',
          helpers  : ['themes/kollavarsham/helpers/helpers.js']
        }
      }
    },
    buildcontrol : {
      options : {
        dir     : 'doc',
        commit  : true,
        push    : true,
        message : 'Built %sourceName% API documentation from commit %sourceCommit% on branch master'
      },
      pages   : {
        options : {
          remote : 'git@github.com:kollavarsham/kollavarsham-nodejs.git',
          branch : 'gh-pages'
        }
      }
    }
  });

};
