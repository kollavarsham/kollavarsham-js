/*
 * kollavarsham
 * http://kollavarsham.org
 *
 * Copyright (c) 2014-2018 The Kollavarsham Team
 * Licensed under the MIT license.
 */

module.exports = function (grunt) {
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
    }
  });

};
