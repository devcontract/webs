export function getEthPice(){ setInterval(function(){
               $.getJSON('https://api.etherscan.io/api?module=stats&action=ethprice&apikey=YourApiKeyToken',
               function(jd) { $("#ethusd").text($("#raised").text() * jd.result["ethusd"] );});


},100);};

export function getEurToUsd(){
  $.getJSON('http://free.currencyconverterapi.com/api/v5/convert?q=EUR_USD&compact=y', function(eur){
    var eur = ($("#ethusd").text() / eur.EUR_USD["val"]).toFixed(2);
    var number = Number(eur);
$("#inEuro").text( number );
})
};
