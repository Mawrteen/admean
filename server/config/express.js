var express = require('express'),
    stylus = require('stylus');

module.exports = function(app, config) {

    function compile(str, path) {
        return stylus(str).set('filename', path);
    }

//App Configuration, formerly known as app.configure(){}.
    app.set('view engine', 'jade');
    app.set('views', config.rootPath + '/server/views');
    app.use(stylus.middleware(
        {
            src: config.rootPath + "/public",
            compile: compile
        }
    ));
    app.use(express.static(config.rootPath + '/public'));
};