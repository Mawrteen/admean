var mongoose = require('mongoose'),
    userModel = require('../models/User');

//Mongoose Connection Config
module.exports = function(config) {
  mongoose.connect(config.db, {
    useMongoClient: true
  });
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('sstox db opened');
  });
  
  // Creating Some Initial Users if thedatabase is empty
  userModel.createDefaultUsers();
}
