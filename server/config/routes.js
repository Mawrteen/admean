module.exports = function (app) {
    //Setting the Path for the partials.
    app.get('/partials/*', function(req, res){
        res.render('partials/' + req.params[0]);
    });

    //Express Default Route
    app.get('*', function(req, res){
        res.render('index');
    });
};