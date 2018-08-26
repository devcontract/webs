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

        var fixedSoft = $("#soft").text() * jd.ETH[currency];
        var fs = fixedSoft.toFixed(2);
        $("#eth_convert_soft").text(fs);

        var fixedHard = $("#hard").text() * jd.ETH[currency];
        var fh = fixedHard.toFixed(2);
        $("#eth_convert_hard").text(fh);
      }); // Displaying Jason object that we want
  }, 100);
}; // Interval in MiliSeconds
