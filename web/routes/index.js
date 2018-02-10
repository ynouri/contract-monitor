var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'AHAHA INDEED' });
});

/* GET txs page. */
router.get('/tx/:id', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
