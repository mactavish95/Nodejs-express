var express = require('express');
var app = express();

app.get('/', function(request, response) {
	response.send('<h1>Hello world I am coder</h1>');
});


app.get('/users', function(request, response) {
	response.send('Users list');
});

app.listen(3000, function() {
	console.log('Server listening on port 3000')
});