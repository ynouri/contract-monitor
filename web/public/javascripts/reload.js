// Call load_txs every 1s once the document is loaded

$(document).ready(function() {
  setInterval(load_txs, 1000);
});

// Load transaction list from /txs GET API, and display them in the #txs element

function load_txs() {
  $.getJSON( "txs", function(data) {
    var items = [];
    $.each(data, function() {
      items.push( "<p>" + timestamp_formatted(this.timestamp) + " - " + etherscan_a_link(this.hash) + "</p>" );
    });
    $("#txs").html(items.join(""));
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
