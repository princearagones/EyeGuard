var express    = require("express");
var app = express();
var path = require('path');

// app.use('/scripts', express.static(__dirname + '/node_modules/materialize-css/dist/'));
app.use(express.static(__dirname+"/public"));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.get('/', function(req, res, next) {
  // handle_database(req,res);
  res.render('pages/index')
});

app.get('*', function(req, res, next) {
  res.sendStatus(404);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('NodeJS Web server is running at http://%s:%s', host, port);
});

