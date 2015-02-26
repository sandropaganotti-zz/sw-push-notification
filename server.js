var express = require('express');
var bodyParser = require('body-parser')
var app = express();

app.use(bodyParser.json());

app.use(express.static(__dirname ));

app.post('/subscribe', function(req, res){

	res.send(JSON.stringify(req.body));
});

module.exports = app;

// var server = app.listen(3000, function () {
//   var host = server.address().address
//   var port = server.address().port
//   console.log('Example app listening at http://%s:%s', host, port)
// })