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
const sql = require("mssql/msnodesqlv8");
// /require("msnodesqlv8");
var returnValue = '';
const conn = new sql.ConnectionPool({
    Provider : "SQLOLEDB",
    database: "Footprints",
    server: "bos-footdev01",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});

//console.log("Connected");
//const request = new sql.Request(conn);
//var myQuery = request.query("select top 100 mrID, mrTITLE, mrSTATUS, Target__bDate  from dbo.MASTER2 where mrSTATUS != '_INACTIVE_' AND Target__bDate not like 2017 order by mrSUBMITDATE desc;"
//    , function (err, result) {
 //       if (err) {
 //           console.log(err);
 //       }
//        else {
//            returnValue = result;
//        }
//    });
//returnValue = myQuery;

/* Access to the Database via the conn variable */
function DBconnect() {
    conn.connect(function (err) {
        if (err) {
            console.log( "error");
        }
        else {
            console.log( "success");

        }
    });
}
DBconnect();
function DBclose(){
    conn.close();
}


/* Routes */


//app.get('/onload', function(req, res){
//    console.log('test');
//    res.send(returnValue); // end the response
//});

app.get('/tickets', function (req,res) {
    console.log('hit route /tickets');
    const request = new sql.Request(conn);
    var myQuery = request.query("select top 20 mrID, mrTITLE, mrSTATUS  from dbo.MASTER2 where mrSTATUS != '_INACTIVE_'  order by mrID desc;",
        function(err, result){
        if(err){
            console.log(err);
            res.send(err);
        }
        else {
            console.log(result.recordset);
            res.send(result.recordset);
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