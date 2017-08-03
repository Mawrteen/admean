var mongoose = require('mongoose'),
  encrypt = require('../utilities/encryption');

var userSchema = mongoose.Schema({
  firstName: { type: String, required: '{PATH} is required!'},
  lastName: { type: String, required: '{PATH} is required!'},
  username: { 
      type: String,
      required: '{PATH} is required!',
      unique: true
  },
  salt: { type: String, required: '{PATH} is required!'},
  hashed_pwd: { type: String, required: '{PATH} is required!'},
  roles: [String]
});

userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  }
}

var User = mongoose.model('User', userSchema);

function createDefaultUsers() {
    User.find({}, function(err, collection) {
        if (collection.length === 0) {
            var salt, hash;
            salt = encrypt.createSalt();
            hash = encrypt.hashPwd(salt, 'pass');
            User.create({
            firstName: 'Martin',
            lastName: 'Mincohorov',
            username: 'mmincorov',
            salt: salt,
            hashed_pwd: hash,
            roles: ['admin']
            },
            {
            firstName: 'Mawrteen',
            lastName: 'Meen',
            username: 'mmeen',
            salt: salt,
            hashed_pwd: hash,
            roles: []
            });
        }
    });
}

exports.createDefaultUsers = createDefaultUsers;