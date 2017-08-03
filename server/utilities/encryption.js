var crypto = require('crypto');

exports.createSalt = function () {
  return crypto.randomBytes(128).toString('base64');
}

exports.hashPwd =  function (salt, pwd) {
  const hmac = crypto.createHmac('sha1', salt.toString());
  return hmac.update(pwd).digest('hex');
}