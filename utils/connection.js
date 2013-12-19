/**
 * Created by dramos on 27/11/13.
 */
'use strict';
var mysql = require('mysql');

var Connection = {

    get: mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: '12345',
        database: 'test'})



}

module.exports = Connection
