var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'deployment';

var app = express();

app.set('view engine', 'jade');
app.set('views', __dirname + '/server/views');

app.get('*', function(req, res){
	res.render('index');
});

var port = "3000"
app.listen(port);
console.log('Listening on port ' + port + '...');
