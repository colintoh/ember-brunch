module.exports = function(karma, type) {
  karma.set({
    basePath: './',
      
    files: [
      "public/javascripts/vendor.js",
      "public/javascripts/app.js",
      "tests/helpers.js",
      "tests/" + type + "/*.js"
    ],

    logLevel: karma.LOG_ERROR,
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false,
       
    frameworks: ["qunit"]
  });
};