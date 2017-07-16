var express = require('express'),
    stylus = require('stylus'),
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');

module.exports = function(app, config) {

    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

//App Configuration, formerly known as app.configure(){}.
    app.set('view engine', 'jade');
    app.set('views', config.rootPath + '/server/views');
    app.use(cookieParser());
    app.use(session({secret: 'sstox crazy shizzle', resave: false, saveUninitialized: false}));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(stylus.middleware(
        {
            src: config.rootPath + "/public",
            compile: compile
        }
    ));
    app.use(express.static(config.rootPath + '/public'));
};