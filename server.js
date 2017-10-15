var express = require('express');
var app = express.createServer();

app.get('/', function(req, res) {
	res.json({'msg': 'This is my NodeJS application! HelloWorld!!!'})
});

var port = process.env.port || 3000;
app.listen(port, function() {
	console.log('server started');
});
