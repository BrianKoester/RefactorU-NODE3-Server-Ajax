//****************
// SERVER SIDE JS
//****************

/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var fs = require('fs');
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// serve a static file
app.get('/', function(req, res){
	fs.readFile(__dirname + '/form.html', function(err, data){
		res.setHeader('Content-Type', 'text/html')
		res.send(data)
	})
});



app.post('/submitform', function(req, res){

	// this console.log will display in terminal
	console.log('input:', req.body.inputtext);
	
		// Check for anything entered and print it
		if(req.body.inputtext){
			res.send({success : "Success! Input from Server => "
								+ req.body.inputtext})
		}

		// If there isnt any data, return an error
		else {
			res.send({error : "Error! from Server"})
		}

});


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

