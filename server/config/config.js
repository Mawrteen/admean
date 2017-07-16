var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        db: 'mongodb://localhost/sstox',
        rootPath: rootPath,
        port: 3000
    },
    production: {
        rootPath: rootPath,
        db: '',
        port: ''
    }
};