var mongoose = require('mongoose');
var moment = require('moment');
var Schema = mongoose.Schema;

// Declare schema
var TxSchema = new Schema(
  {
    blockNumber: {type: Number},
    hash: {type: String},
    input: {type: String},
    timestamp: {type: Number}
  },
  { collection: 'txs',
    toObject: {virtuals: false},
    toJSON: {virtuals: false}
  }
);

// Virtual properties
// Note: both have been re-implemented on client side in reload.js
// and should therefore be removed

// Etherscan URL
TxSchema
.virtual('etherscan_url')
.get(function () {
  return 'https://etherscan.io/tx/' + this.hash;
});

// Timestamp format
TxSchema
.virtual('timestamp_formatted')
.get(function () {
  return moment.unix(this.timestamp).format('h:mm A');
});

// Export model
module.exports = mongoose.model('Tx', TxSchema);
