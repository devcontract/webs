export function buyToken(){console.log("buying!!!!!")};

export function state() {
var trig;
setInterval (function() {
   if (trig == 1) {
     allowed_button("buy_myetherwallet");
     allowed_button("buy_metamask", "#buy_metamask");
     allowed_button("withdraw_myetherwallet");
     allowed_button("withdraw_metamask");
     allowed_button("refund_myetherwallet");
     allowed_button("refund_metamask");
     trig=0;
   } else {
     non_allowed_button("buy_myetherwallet");
     non_allowed_button("buy_metamask", "#buy_metamask");
     non_allowed_button("withdraw_myetherwallet");
     non_allowed_button("withdraw_metamask");
     non_allowed_button("refund_myetherwallet");
     non_allowed_button("refund_metamask");
     trig=1;
   }

},1000);
}

function allowed_button(id,jqid){
   document.getElementById(id).className = "allowed_button";
    $(jqid).css("pointer-events", "auto");
}

function non_allowed_button(id, jqid){
   document.getElementById(id).className = "non_allowed_button";
    $(jqid).css("pointer-events", "none");
}
