var express = require('express'),
	connect = require('connect'),
	mongoose = require('mongoose'),
	stylus = require('stylus');



var env = process.env.NODE_ENV = process.env.NODE_ENV || 'deployment';

var app = express();

function compile(str, path){
	return stylus(str).set('filename', path);
}

//App Configuration, formerly known as app.configure(){}.
app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');
app.use(stylus.middleware(
	{
		src: __dirname + "/public",
		compile: compile
	}
));
app.use(express.static(__dirname + '/public'));

//DB Connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/sstox', { useMongoClient: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error...'));
db.once('open', function callback(){
	console.log('sstox db opened');
});


//Setting the Path for the partials.
app.get('/partials/:partialPath', function(req, res){
	res.render('partials/' + req.params.partialPath);
});

//Express Default Route
app.get('*', function(req, res){
	res.render('index');
});

//Express Port Settings
var port = "3000";
app.listen(port);
console.log('Listening! on port ' + port + '...');
