
var trig;
setInterval (function() {
   if (trig == 1) {
     allowed_button("buy_myetherwallet");
     allowed_button("buy_metamask");
     allowed_button("withdraw_myetherwallet");
     allowed_button("withdraw_metamask");
     allowed_button("refund_myetherwallet");
     allowed_button("refund_metamask");
     trig=0;
   } else {
     non_allowed_button("buy_myetherwallet");
     non_allowed_button("buy_metamask");
     non_allowed_button("withdraw_myetherwallet");
     non_allowed_button("withdraw_metamask");
     non_allowed_button("refund_myetherwallet");
     non_allowed_button("refund_metamask");
     trig=1;
   }

},2000);

function allowed_button(id){
   document.getElementById(id).className = "allowed_button";
   document.getElementById(id).setAttribute('onclick' ,'return true');
}

function non_allowed_button(id){
   document.getElementById(id).className = "non_allowed_button";
   document.getElementById(id).setAttribute('onclick' ,'return false');
}
