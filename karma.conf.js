module.exports = function(karma) {
  karma.set({
    basePath: '',
      
    files: [
      "public/javascripts/vendor.js",
      "public/javascripts/app.js",
      "tests/helpers.js",
      "tests/demo/*_tests.js"
    ],

    logLevel: karma.LOG_ERROR,
    browsers: ['PhantomJS'],
    singleRun: true,
    autoWatch: false,
       
    frameworks: ["qunit"]
  });
};