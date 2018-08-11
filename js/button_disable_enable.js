
var trig;
setInterval (function() {
   if (trig == 1) {
     allowed_myetherwallet("buy_myetherwallet");
     allowed_mmetamask("buy_metamask");
     allowed_myetherwallet("withdraw_myetherwallet");
     allowed_mmetamask("withdraw_metamask");
     allowed_myetherwallet("refund_myetherwallet");
     allowed_mmetamask("refund_metamask");
     trig=0;
   } else {
     non_allowed_myetherwallet("buy_myetherwallet");
     non_allowed_mmetamask("buy_metamask");
     non_allowed_myetherwallet("withdraw_myetherwallet");
     non_allowed_mmetamask("withdraw_metamask");
     non_allowed_myetherwallet("refund_myetherwallet");
     non_allowed_mmetamask("refund_metamask");
     trig=1;
   }

},2000);

function allowed_myetherwallet(id){
   document.getElementById(id).className = "allowed_myetherwallet";
   document.getElementById(id).setAttribute('onclick' ,'return true');
}

function non_allowed_myetherwallet(id){
   document.getElementById(id).className = "non_allowed_myetherwallet";
   document.getElementById(id).setAttribute('onclick' ,'return false');
}

function allowed_mmetamask(id){
   document.getElementById(id).className = "allowed_metamask";
   document.getElementById(id).setAttribute('onclick' ,'return true');
}

function non_allowed_mmetamask(id){
  document.getElementById(id).className = "non_allowed_metamask";
  document.getElementById(id).setAttribute('onclick' ,'return false');
}