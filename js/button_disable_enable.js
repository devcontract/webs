
var cap = 100;
var reached = 50;


/////////////////////////////// purchase_details_ block buttons
setInterval (function() {

if (reached >= cap) {

  var css_myetherwallet = '#buy_myetherwallet:hover{cursor: not-allowed}';
  var css_metamask ='#buy_metamask:hover{cursor:not-allowed}';

  var style = document.createElement('style');

  style.appendChild(document.createTextNode(css_myetherwallet));
  document.getElementsByTagName('head')[0].appendChild(style);
  style.appendChild(document.createTextNode(css_metamask));
  document.getElementsByTagName('head')[0].appendChild(style);

document.getElementById('buy_myetherwallet').style.backgroundColor = "#cccccc";
document.getElementById('buy_myetherwallet').style.color ="#737277";
document.getElementById('buy_myetherwallet').setAttribute('onclick' ,'return false');

document.getElementById('buy_metamask').style.backgroundColor = "#cccccc";
document.getElementById('buy_metamask').style.color ="#737277";
document.getElementById('buy_metamask').setAttribute('onclick' ,'return false');

} else {

}

},10);
/////////////////////////////// purchase_details_ block buttons

/////////////////////////////// withdrawal  block buttons
setInterval (function() {

if (reached >= cap) {

  var css_myetherwallet = '#withdraw_myetherwallet:hover{cursor: not-allowed}';
  var css_metamask ='#withdraw_metamask:hover{cursor:not-allowed}';

  var style = document.createElement('style');

  style.appendChild(document.createTextNode(css_myetherwallet));
  document.getElementsByTagName('head')[0].appendChild(style);
  style.appendChild(document.createTextNode(css_metamask));
  document.getElementsByTagName('head')[0].appendChild(style);

document.getElementById('withdraw_myetherwallet').style.backgroundColor = "#cccccc";
document.getElementById('withdraw_myetherwallet').style.color ="#737277";
document.getElementById('withdraw_myetherwallet').setAttribute('onclick' ,'return false');

document.getElementById('withdraw_metamask').style.backgroundColor = "#cccccc";
document.getElementById('withdraw_metamask').style.color ="#737277";
document.getElementById('withdraw_metamask').setAttribute('onclick' ,'return false');

} else {

}

},10);
/////////////////////////////// withdrawal  block buttons


/////////////////////////////// withdrawal  block buttons
setInterval (function() {

if (reached >= cap) {

  var css_myetherwallet = '#refund_myetherwallet:hover{cursor: not-allowed}';
  var css_metamask ='#refund_metamask:hover{cursor:not-allowed}';

  var style = document.createElement('style');

  style.appendChild(document.createTextNode(css_myetherwallet));
  document.getElementsByTagName('head')[0].appendChild(style);
  style.appendChild(document.createTextNode(css_metamask));
  document.getElementsByTagName('head')[0].appendChild(style);

document.getElementById('refund_myetherwallet').style.backgroundColor = "#cccccc";
document.getElementById('refund_myetherwallet').style.color ="#737277";
document.getElementById('refund_myetherwallet').setAttribute('onclick' ,'return false');

document.getElementById('refund_metamask').style.backgroundColor = "#cccccc";
document.getElementById('refund_metamask').style.color ="#737277";
document.getElementById('refund_metamask').setAttribute('onclick' ,'return false');

} else {

}

},10);
/////////////////////////////// withdrawal  block buttons



setInterval (function(){
  reached = 101;
},10000);
