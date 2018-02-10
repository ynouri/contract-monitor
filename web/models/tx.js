var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Declare schema
var TxSchema = new Schema(
  {
    blockNumber: {type: Number},
    hash: {type: String},
    input: {type: String},
  },
  { collection: 'txs' }
);

// Virtual properties
TxSchema
.virtual('etherscan_url')
.get(function () {
  return 'https://etherscan.io/tx/' + this.hash;
});

// Export model
module.exports = mongoose.model('Tx', TxSchema);
