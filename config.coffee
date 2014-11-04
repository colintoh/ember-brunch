fs   = require 'fs'
path = require 'path'

# See docs at http://brunch.readthedocs.org/en/latest/config.html.

exports.config =

  files:

    javascripts:
      defaultExtension: 'js',
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^(bower_components|vendor)/

    stylesheets:
      defaultExtension: 'css'
      joinTo: 'stylesheets/app.css'
      order:
        before: [
          'vendor/styles/bootstrap.css',
          'bower_components/js-mobile-console/style/mobile-console.css'
        ]

    templates:
      precompile: true
      root: 'templates'
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js' : /^app/
      paths:
      	jquery: 'bower_components/jquery/dist/jquery.js'
      	handlebars: 'bower_components/handlebars/handlebars.js'
      	ember: 'bower_components/ember/ember.js'

  plugins:
    jshint:
      pattern: /^app\/.*\.js$/
