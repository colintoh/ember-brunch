fs   = require 'fs'
path = require 'path'

# See docs at http://brunch.readthedocs.org/en/latest/config.html.

exports.config =

  files:

    javascripts:
      defaultExtension: 'js',
      joinTo:
        'javascripts/app.js': /^app/
        'javascripts/vendor.js': /^vendor/

      order:
        before: [
          'vendor/scripts/console-helper.js',
          'vendor/scripts/jquery-1.8.0.min.js',
          'vendor/scripts/handlebars-1.0.rc.2.js',
          'vendor/scripts/ember-latest.js',
          'vendor/scripts/bootstrap.js',
          ]

    stylesheets:
      defaultExtension: 'css'
      joinTo: 'stylesheets/app.css'
      order:
        before: ['vendor/styles/bootstrap.css']

    templates:
      precompile: true
      root: 'templates'
      defaultExtension: 'hbs'
      joinTo: 'javascripts/app.js' : /^app/
      paths:
        jquery:'vendor/scripts/jquery-1.8.0.min.js'
        handlebars:'vendor/scripts/handlebars-1.0.rc.2.js'
        ember: 'vendor/scripts/ember-latest.js'

   conventions:
      ignored: -> false

  server:
    port: 3333
    base: '/'
    run: no
