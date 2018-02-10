var Tx = require('../models/tx');

// Returns the transaction list view
exports.index = function(req, res) {
  Tx.find({})
    .limit(10)
    .exec(function (err, txs_list_) {
      if (err) { return next(err); }
      //Successful, so render
      res.render('index', { title: 'Txs list', txs_list: txs_list_});
    });
};

// Returns transaction details JSON
exports.tx_detail = function(req, res) {
  res.render('tx_detail', { title: 'Tx detail page - not implemented' })
};
