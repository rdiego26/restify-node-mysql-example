/**
 * Created by rdiego26 on 19/12/13.
 */

//Modules dependencies
var restify  = require('restify'),
http = require('http');

var _ = require('underscore');


var constants = require('./utils/Constants');
var connection = require('./utils/connection');
var resourceAController = require('./controllers/resourceA');

//Create server instance
var server = restify.createServer({
    name: 'apiRestify'
});

//ROUTES
-server.get('/api/resourcea', function(req, res){
            console.log('resourcea');

        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

});

server.listen(constants.server.port, function() {
    console.log('Server listening on ' + constants.server.port);
    });