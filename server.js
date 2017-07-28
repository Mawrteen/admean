var express = require('express');

var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';
var app = express();
//Initializing basic server configuration
var config = require('./server/config/config')[env];

// Express Config
require('./server/config/express')(app, config);

//Mongoose Config
require('./server/config/mongoose')(config);

// Passport Authentication Logic
require('./server/config/passport')();

//Routes Config
require('./server/config/routes')(app);

//Express Port Settings
app.listen(config.port);
console.log('Listening! on port ' + config.port + '...');
