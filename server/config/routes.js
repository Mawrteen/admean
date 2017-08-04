var auth = require('./auth'),
    users = require('../controllers/users'),
    mongoose = require('mongoose'),
    User = mongoose.model('User'),
    sneakers = require('../controllers/sneakers');

module.exports = function (app) {

    app.get('/api/users', function (req, res) {
      User.find({}, function (err, collection) {
        res.send(collection);
      });
    });
    app.get('/api/sneakers', sneakers.getSneakers);
    app.get('/api/sneakers/:id', sneakers.getSneakerById);
    //Setting the Path for the partials.
    app.get('/partials/*', function(req, res){
        res.render('partials/' + req.params[0]);
    });

    app.post('/api/users', users.createUser);
    app.put('/api/users', users.updateUser);
    app.post('/login', auth.authenticate);
    app.post('/logout', function (req, res) {
      req.logout();
      res.send(
        {
          logout: true
        }
      );
    });

    app.all('/api/*', function (req, res) {
      res.send(404);
    });
    //Express Default Route
    app.get('*', function(req, res){
        res.render('index', {
          bootstrappedUser: req.user
          });
    });
};
