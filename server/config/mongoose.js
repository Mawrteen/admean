var mongoose = require('mongoose'),
  crypto = require('crypto');

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
};

var userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  username: String,
  salt: String,
  hashed_pwd: String,
  roles: [String]
});

userSchema.methods = {
  authenticate: function(passwordToMatch) {
    return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
  }
}

var User = mongoose.model('User', userSchema);

User.find({}, function(err, collection) {
  if (collection.length === 0) {
    var salt, hash;
    salt = createSalt();
    hash = hashPwd(salt, 'pass');
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

function createSalt() {
  return crypto.randomBytes(128).toString('base64');
}

function hashPwd(salt, pwd) {
  const hmac = crypto.createHmac('sha1', salt.toString());
  return hmac.update(pwd).digest('hex');
}
