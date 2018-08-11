
var trig;
setInterval (function() {
   if (trig == 1) {
     allowed("buy_myetherwallet");
     //allowed("buy_metamask");
     allowed("withdraw_myetherwallet");
     //llowed("withdraw_metamask");
     allowed("refund_myetherwallet");
    // allowed("refund_metamask");
     trig=0;
   } else {
     non_allowed("buy_myetherwallet");
    // non_allowed("buy_mmetamask");
     non_allowed("withdraw_myetherwallet");
   //  non_llowed("withdraw_metamask");
     non_allowed("refund_myetherwallet");
   //  non_allowed("refund_metamask");
     trig=1;
   }

},1000);

function allowed(id){
 document.getElementById(id).className = "allowed_button";
 document.getElementById(id).setAttribute('onclick' ,'return true');
}

function non_allowed(id){
document.getElementById(id).className = "non_allowed_button";
document.getElementById(id).setAttribute('onclick' ,'return false');
}