var auth = require('./auth');

module.exports = function (app) {
    //Setting the Path for the partials.
    app.get('/partials/*', function(req, res){
        res.render('partials/' + req.params[0]);
    });

    app.post('/login', auth.authenticate);
    app.post('/logout', function (req, res) {
      req.logout();
      res.send(
        {
          logout: true
        }
      );
    });
    //Express Default Route
    app.get('*', function(req, res){
        res.render('index', {
          bootstrappedUser: req.user
          });
    });
};
