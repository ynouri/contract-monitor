// Initialize the rolling time stamp, with a 5min lag
var rolling_ts = moment().unix() - 300;
console.log(rolling_ts)

// Call load_txs every 1s once the document is loaded
$(document).ready(function() {
  setInterval(load_txs, 1000);
});

// Load transaction list from /txs GET API, and display them in the #txs element
function load_txs() {
  $.getJSON( "txs?ts=" + rolling_ts, function(data) {
    var items = [];
    // Check if data is empty
    if (data.length > 0) {
      // txs GET API  returns the most recent timestamp first
      // Update the rolling time stamp with the most recent
      rolling_ts = data[0].timestamp
      $.each(data, function() {
        items.push( "<p>" + timestamp_formatted(this.timestamp) + " - " + etherscan_a_link(this.hash) + "</p>" );
      });
      // Add the new txs to the top of the list
      $("#txs").prepend(items.join(""));
    };
  });
}

// Display helpers
function timestamp_formatted(timestamp) {
  return moment(parseInt(timestamp) * 1000).format('h:mm A');
}
function etherscan_url(hash) {
  return "https://etherscan.io/tx/" + hash;
}
function etherscan_a_link(hash) {
  return "<a target='_blank' href='" + etherscan_url(hash) + "'>" + hash + "</a>";
}
