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
app.use(session({
    secret: 'ThisKeyCanBeAnything',
    resave: false,
    saveUnitialized: true,
    cookie: {secure: false},
    access_token: null
}));
//DB for footprints = Bos-footdev01;



app.use(body_parser.urlencoded({extended : false}));
app.use(body_parser({limit: '50mb'}));
app.use(body_parser.json());
app.use(express.static(__dirname + '/public')).use(cookieParser());
app.use(favicon(path.join(__dirname, 'public' ,'favicon.ico')));

module.exports = app;

console.log('Listening on 8080');