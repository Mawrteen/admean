var express = require('express'),
	connect = require('connect')
	stylus = require('stylus');



var env = process.env.NODE_ENV = process.env.NODE_ENV || 'deployment';

var app = express();

function compile(str, path){
	return stylus(str).set('filename', path);
}

//App Configuration, formerly known as app.configure(){}.
app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');
app.use(connect.logger('dev'));
app.use(connect.json());
app.use(connect.urlencoded());
app.use(stylus.middleware(
	{
		src: __dirname + "/public",
		compile: compile
	}
));
app.use(express.static(__dirname + '/public'));

app.get('/partials/:partialPath', function(req, res){
	res.render('partials/' + req.params.partialPath);
});

app.get('*', function(req, res){
	res.render('index');
});


var port = "3000"
app.listen(port);
console.log('Listening on port ' + port + '...');
