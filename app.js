var express = require('express'); // Express web server framework
var session = require('express-session');
var app = express();
var request = require('request'); // "Request" library
var handlebars = require('handlebars');
var querystring = require('querystring');
var cookieParser = require('cookie-parser');
var body_parser = require('body-parser');
var session = require('express-session');
var favicon = require('serve-favicon');
var path = require('path');
var config = require('./config.json');
var sql = require('mssql');
require("msnodesqlv8");
var AD = require('activedirectory');
//Above can be removed when not using a DB.

//DB for footprints = Bos-footdev01;

var sql = require('node-sqlserver');
var conn_str = "Driver={SQL Server Native Client 11.0};Server=(local);Database=AdventureWorks2012;Trusted_Connection={Yes}";

sql.open(conn_str, function (err, conn) {
    if (err) {
        console.log("Error opening the connection!");
        return;
    }
    conn.queryRaw("SELECT TOP 10 FirstName, LastName FROM Person.Person", function (err, results) {
        if (err) {
            console.log("Error running query!");
            return;
        }
        for (var i = 0; i < results.rows.length; i++) {
            console.log("FirstName: " + results.rows[i][0] + " LastName: " + results.rows[i][1]);
        }
    });
});




app.use(body_parser.urlencoded({extended : false}));
app.use(body_parser({limit: '50mb'}));
app.use(body_parser.json());
app.use(express.static(__dirname + '/public')).use(cookieParser());
app.use(favicon(path.join(__dirname, 'public' ,'favicon.ico')));

module.exports = app;

console.log('Listening on 8080');