var Tx = require('../models/tx');

// Returns the transaction list view
exports.index = function(req, res, next) {
  Tx.find({})
    .limit(100)
    .sort('-timestamp')
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


// Returns transaction list JSON
exports.txs_list_json = function(req, res, next) {
  query_ts = req.query.ts || 0
  Tx.find({})
    .gt('timestamp', query_ts)
    .sort('-timestamp')
    .limit(100)
    .select('-_id hash timestamp')
    .exec(function (err, txs_list_) {
      if (err) { return next(err); }
      //Successful, so render
      res.json(txs_list_);
    });
};
