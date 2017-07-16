var mongoose = require('mongoose');

//Mongoose Connection Config
module.exports = function (config) {
    mongoose.connect(config.db, { useMongoClient: true });
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error...'));
    db.once('open', function callback(){
        console.log('sstox db opened');
    });
};