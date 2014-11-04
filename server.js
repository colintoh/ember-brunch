var cluster = require('cluster'),
	numCPUs = require('os').cpus().length;

//If it's still in master thread, divide them into separate work thread
if(cluster.isMaster){

	for (var i = 0; i < numCPUs; i += 1) {
        cluster.fork();
    }

} else {
	var express = require('express'),
		compression = require('compression'),
		app = express(),
		port = process.env.PORT || 8080;

	app.use(compression()); //cut the fats!
	app.use(express.static(__dirname + '/public'));

	exports.startServer = function(port,path,callback){
		app.get('*', function(request, response){
		  response.sendfile('./public/index.html');
		});

		app.listen(port);
		console.log("Server started on port " + port);
	}

	if( process.env.PORT ){
		exports.startServer(process.env.PORT);
	}
}