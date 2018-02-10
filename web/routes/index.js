var express = require('express');
var router = express.Router();

// Require controller module
var controller = require('../controllers/controller');

// Home page
router.get('/', controller.index);

// Redirect /tx to /
router.get('/tx', function(req, res) {
  res.redirect('/');
});

// Tx details
router.get('/tx/:id', controller.tx_detail);

module.exports = router;
