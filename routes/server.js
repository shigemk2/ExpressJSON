exports.server = function(req, res){
    var parser = require('xml2json');
    var request = require('request');
    // app.js
    var config = require('../config');

    var param = req.query.p1;
    var xml = 'http://api.tinami.com/content/search?api_key='+ config.api_key +'&text=' + param;
    var json = '';

    request(xml, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var options = {
                object: false,
                reversible: false,
                coerce: true,
                sanitize: true,
                trim: true,
                arrayNotation: false
            };
            json = parser.toJson(body, options);
            res.render('server',
                       {
                           msg: json
                       }
                      );
        }
    });
};
