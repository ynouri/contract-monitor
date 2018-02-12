var express = require('express');
var router = express.Router();

// Require controller module
var controller = require('../controllers/controller');

// Home page
router.get('/', controller.index);

// Redirect /tx to /
router.get('/txs', controller.txs_list_json);

// Tx details
router.get('/tx/:id', controller.tx_detail);

module.exports = router;
