var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

// Declare schema
var TxSchema = new Schema(
  {
    blockNumber: {type: Number},
    hash: {type: String},
    input: {type: String},
    timestamp: {type: String}
  },
  { collection: 'txs' }
);

// Virtual properties
TxSchema
.virtual('etherscan_url')
.get(function () {
  return 'https://etherscan.io/tx/' + this.hash;
});

TxSchema
.virtual('timestamp_formatted')
.get(function () {
  return moment.unix(this.timestamp).format('h:mm A');
  //.format('MMM D, YYYY, h:m A');
  // Maybe time format should be handled at view level?
  // + what about time zone. This would be EST
});

// Export model
module.exports = mongoose.model('Tx', TxSchema);
