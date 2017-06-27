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
var servers = require('./servers.json'); //Must be included for the admin page
var fs = require('file-system');
//MARKED FOR DELETE var returnValue = '';
const conn = new sql.ConnectionPool({
    Provider: "SQLOLEDB",
    database: "Footprints",
    server: "bos-footdev01",
    driver: "msnodesqlv8",
    options: {
        trustedConnection: true
    }
});
/* Above contains all parameters and the dependencies for the project */

app.use(body_parser.json());



/* Access to the Database via the conn variable */
function DBconnect() {
    conn.connect(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("success");

        }
    });
}
function DBclose() {
    conn.close();
}
//DBconnect();


/***************************** Routes **************************************/
/* Upon a request will send a parsed JSON file back to the front end */
app.get('/jsonRead', function (req, res) {
    fs.readFile('servers.json', function (err, content) {
        if (err) {
            res.send(err);
            console.log(err);
            return;
        }
        else {
            var serverList = JSON.parse(content);
            res.send(JSON.stringify(serverList));
        }
    });
});

app.post('/jsonRecieve', function (req, res) {
    console.log(req.body);
    var method = req.body.method;
    delete req.body["method"];
    var jsonString = JSON.stringify(req.body);

    console.log(jsonString);
    if(method == "New Item"){
        console.log("new item");
    }
    else{
        console.log("Deleting an item");
    }
    //var myLastKey =

});

/* The route for the deployment page to generate the ticket list */
app.get('/footprints', function (req, res) {
    var searchParameter = '';
    var queryString = req.query.query;
    const request = new sql.Request(conn);
    console.log(req.query.option);
    console.log(req.query.query);
    switch (req.query.option) {
        case 'Status':
            searchParameter = 'mrSTATUS';
            break;
        case 'FP Number':
            searchParameter = 'mrID';
            break;
        case 'Date':
            searchParameter = 'Target__bDate';
            break;
        case 'Keyword':
            searchParameter = 'mrTITLE';
            break;
        case '':
            break;
    }
    console.log(searchParameter);
    var sqlRequest = "select top 100 mrID, mrTITLE, mrSTATUS, Target__bDate  from dbo.MASTER2 where " + searchParameter + " like " + "'" + queryString + "' order by mrID desc;";
    if (searchParameter == 'mrTITLE') {
        sqlRequest = "select top 100 mrID, mrTITLE, mrSTATUS, Target__bDate  from dbo.MASTER2 where " + "CONTAINS(mrTITLE,'" + queryString + "') order by mrID desc;";
    }
    if (searchParameter == 'Target__bDate') {
        sqlRequest = "select top 100 mrID, mrTITLE, mrSTATUS, Target__bDate  from dbo.MASTER2 where CAST(Target__bDate as date) >= '" + queryString +
            "' ORDER BY Target__bDate asc";
    }
    console.log(sqlRequest);
    var myQuery = request.query(sqlRequest,
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                console.log(result.recordset);
                res.send(result.recordset);
            }
        });
});

/*Ticket route for the home page sideboard */
app.get('/tickets', function (req, res) {
    console.log('hit route /tickets');
    const request = new sql.Request(conn);
    var myQuery = request.query("select top 20 mrID, mrTITLE, mrSTATUS  from dbo.MASTER2 where mrSTATUS != '_INACTIVE_'  order by mrID desc;",
        function (err, result) {
            if (err) {
                console.log(err);
                res.send(err);
            }
            else {
                console.log(result.recordset);
                res.send(result.recordset);
            }
        });
});


/**************************** EXPORTS ****************************************/


app.use(body_parser.urlencoded({extended: false}));
app.use(body_parser({limit: '50mb'}));
app.use(body_parser.json());
app.use(express.static(__dirname + '/public')).use(cookieParser());
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

module.exports = app;

console.log('Listening on 8080');