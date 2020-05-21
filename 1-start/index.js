console.log(process.env);

var express = require('express');
var app = express();
var cookieParser = require('cookie-parser')

var userRoute = require('./routes/user.route');
var authRoute = require('./routes/auth.route'); 

var authMiddleware = require('./middlewares/auth.middleware');

var port = 3000;

app.engine('pug', require('pug').__express);
app.set('view engine', 'pug');
app.set('views', './views');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(cookieParser('adsfsafsdffd21'));

app.use(express.static('public'));


// Route
app.get('/', function(request, response) {
	response.render('index', {
		name: 'AAA'
	});
});



app.use('/users', authMiddleware.requireAuth, userRoute);
app.use('/auth' ,authRoute);

app.listen(port, function() {
	console.log('Server listening on port' + port);
});