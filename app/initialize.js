window.App = require('app');


// Require All Template files
window.require.list().filter(function(module){
	return new RegExp('^templates/').test(module);
}).forEach(function(module){
	require(module);
});


// Require All Helper files
window.require.list().filter(function(module){
	return new RegExp('^helpers/').test(module);
}).forEach(function(module){
	require(module);
});


require('router');