module.exports = function (grunt) {


  // Get path to core grunt dependencies

  require('matchdep').filter('grunt-*').forEach(grunt.loadNpmTasks);


  // Project configuration.
  grunt.initConfig({
    clean :["public/images"],
    compress: {
      main: {
        options: {
          mode: 'gzip'
        },
        expand: true,
        src: ['public/javascripts/vendor.js','public/javascripts/app.js','public/stylesheets/app.css'],
      }
    },
    rename: {
      main: {
        files: [
            {src: ['public/javascripts/vendor.js'], dest: 'public/javascripts/vendor.unzip.js'},
            {src: ['public/javascripts/vendor.js.gz'], dest: 'public/javascripts/vendor.js'},
            {src: ['public/javascripts/app.js'], dest: 'public/javascripts/app.unzip.js'},
            {src: ['public/javascripts/app.js.gz'], dest: 'public/javascripts/app.js'},
            {src: ['public/stylesheets/app.css'], dest: 'public/stylesheets/app.unzip.css'},
            {src: ['public/stylesheets/app.css.gz'], dest: 'public/stylesheets/app.css'}
            ]
      }
    },
    exec: {
      brunchBuild: {
        command: 'brunch b'
      },
      brunchBuildOptimize: {
        command: 'brunch b -P'
      }
    },
    groundskeeper: {
      compile: {
        files: {
          "public/javascripts/app.js": "public/javascripts/app.js"
        },
        options: {
          console: false,
          replace: "'0'"
        }
      }
    }
  });

  grunt.registerTask('production',[
    'clean',
    'exec:brunchBuildOptimize',
    'groundskeeper'
  ]);

};