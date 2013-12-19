/**
 * Created by rdiego26 on 19/12/13.
 */
    
var _  = require('underscore');
var constants = require('../utils/Constants');

resourceA = {

    _summarize : [],
    connection: require('../utils/connection'),

    getData: function(req, res, callback) {
        var _connection = resourceA.connection.get;

        _connection.query(constants.SELECT_RESOUCE_A,

            function(err, rows, fields) {

                if(err) {
                    console.log(err);
                    resourceA._summarize = [];
                    callback(req, res);
                    return;
                } else {
                    //Reset previous data
                    resourceA._summarize = [];

                    //Populando o objeto
                    _.each(rows, function(d){

                        resourceA._summarize.push(d);
                    });

                    callback(req, res);
                    return;
                }

            }
        );
    },

    setData: function(req, res) {

        if(resourceA._summarize.length <= 0) {
            console.log('resourceA: No data were obtained by keeping old data.');
        } else {
            console.log('resourceA: Updating data.');
        }

        res.end( JSON.stringify( resourceA._summarize) );


    }

}

module.exports = resourceA