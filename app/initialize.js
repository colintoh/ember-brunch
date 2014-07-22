window.App = require('app');

var regString,
		excludeString,
		fileList = window.require.list();

var requireOrder = {
	helpers: [
		'home' //Example: helpers/include home.js first
	],
	templates: [
	]
}

var folderOrder = ['helpers', 'templates'];

folderOrder.forEach(function(folder){
	
	//Require before
	requireOrder[folder].forEach(function(module){
		require( folder + '/' + module);
	});

	//Require after
	excludeString = requireOrder[folder].join('$|');
	regString = '^'+folder+'/(?!' + excludeString + '$)';
	fileList.filter(function(module){
		return new RegExp(regString).test(module);
	}).forEach(function(module){	
		require(module);
	});

})

require('router');