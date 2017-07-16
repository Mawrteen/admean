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

var userSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    userName: String
});

var User = mongoose.model('User', userSchema);

User.find({}, function (err, collection) {
    if(collection.length === 0) {
        User.create(
            {firstName: 'Martin', lastName: 'Mincohorov', userName: 'mmincorov'},
            {firstName: 'FName', lastName: 'LName', userName: 'FLNAME'},
            {firstName: 'Other', lastName: 'OUser', userName: 'otherusername'}
        );
    }
});