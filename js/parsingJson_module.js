export function getEthPrice() {
  setInterval(function() {
    $.getJSON('https://min-api.cryptocompare.com/data/pricemulti?fsyms=ETH&tsyms=USD,EUR', // getting Json from APi
      function(jd ) {
        var currency;
        if ($("#usd").is(':checked')){
          currency = 'USD';
          $(".currency").text(currency);
        }
        if ($("#eur").is(':checked')){
          currency = 'EUR';
            $(".currency").text(currency);
        }
        $("#eth_convert_raised").text($("#raised").text() * jd.ETH[currency]);
        $("#eth_convert_soft").text($("#soft").text() * jd.ETH[currency]);
        $("#eth_convert_hard").text($("#hard").text() * jd.ETH[currency]);
      }); // Displaying Jason object that we want
  }, 100);
}; // Interval in MiliSeconds
