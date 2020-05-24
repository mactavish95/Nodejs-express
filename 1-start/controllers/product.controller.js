var md5 = require('md5');
var db = require('../db');
var shortid = require('shortid');

module.exports.index = function(req, res) {
	var page = parseInt(req.query.page) || 1; //n
	var Perpage = 8; //x
	var begin = (page-1)*Perpage;
	var end = page*Perpage;
	res.render('products/index', {
		products: db.get('products').value().slice(begin, end)
	});
};

