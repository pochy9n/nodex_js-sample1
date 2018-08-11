var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	var count = 0;
	res.render('index', {
		title: 'JavaScript Sample',
	});
});

module.exports = router;
