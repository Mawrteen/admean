var sneakers = require('../../dbdump/1k.json');

exports.getSneakers = function (req, res) {
    res.send(sneakers);
}

exports.getSneakerById = function (req, res) {
    var sneakerId = req.params.id;
    var sneaker = sneakers.Products.filter(function(a){
        return a.urlKey === sneakerId;
    });
       
    res.send(JSON.stringify(sneaker));
}