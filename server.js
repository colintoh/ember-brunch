var express = require('express'),
    path = require('path'),
    port = process.env.PORT || 8080,
    app = express();

app.configure(function() {
  app.use(express.static(__dirname + '/public'));
});


exports.startServer = function(port,path,callback){
	app.get('*', function(request, response){
	  response.sendfile('./public/index.html');
	});

	app.listen(port);
	console.log("Server started on port " + port);
}