var txHref;
var node = "https://rinkeby.etherscan.io";
var account="0x7Cf8b0Bebd11EE69D8CE5F4E80d33a914d067c62";
var multWallet="0xb42E17Bfd102613CaBe98A8f07874c029996cF95";
export function showTransaction(app) {
  //setInterval(function() {
  $.getJSON(node + "/api?module=account&action=txlist&address=" + account + "&startblock=0&endblock=99999999&sort=asc&apikey=YourApiKeyToken", function(data) {
    var length = data.result.length;
    var i=0;
    for (length = length-1; length > 1; length--) {
      if (data.result[length].to == multWallet.toLowerCase()) {
        i++;
        renderTransaction(data.result[length], i);
      }
    }
  });

//}, 5000);
}


function renderTransaction(element, index) {

  var date = new Date(element.timeStamp * 1000);
  date = date.toLocaleString();

  txHref = node + "/tx/" + element.hash;
  createBaseTrans();
  createDivTrans(index, 20);
  createDivTrans(date, 150);
  createDivTrans(element.hash, 420);
  createDivTrans(element.blockNumber, 50);
  createDivTrans(element.value / 1e18, 150);

  if (element.confirmations <= 1) {
    createButtonTrans(txHref, "Pending", "blue", 150);
  } else {

    if (element.txreceipt_status == 1) {
      createButtonTrans(txHref, "Success", "green", 150);
    } else {
      createButtonTrans(txHref, "Fail", "red", 150);
    }

  }
  createReturnTrans();
}

function createButtonTrans(txHref, data, color, elemWidth) {
  var a = document.createElement("a");
  a.innerHTML = data + "<br><br>";
  a.style.color = color;
  a.style.cursor = "pointer";
  a.style.backgroundColor = color;
  a.style.border = 'none';
  a.style.textDecoration = "none";
  a.style.color = "white";
  a.style.height = "30px";
  a.style.paddingTop = "4px";
  a.style.marginLeft = "20px";
  a.style.textShadow = '2px 2px black';
  a.setAttribute('class', 'tran_hist_grid2');
  a.style.width = elemWidth + "px";
  a.setAttribute('href', txHref);
  a.setAttribute('target', '_blank');
  document.getElementById('tran_hist_stringbase').appendChild(a);
}

function createDivTrans(data, elemWidth, marginLeft) {
  var div = document.createElement("div");
  div.innerHTML = data;
  div.style.color = 'black';
  div.setAttribute('class', "tran_hist_grid2");
  div.style.width = elemWidth + "px";
  div.style.marginLeft = marginLeft + "px";
  document.getElementById('tran_hist_stringbase').appendChild(div);
}

function createReturnTrans() {
  var newElem = document.createElement("BR");
  document.getElementById('tran_hist_stringbase').appendChild(newElem);
}

function createBaseTrans() {
  var div = document.createElement("div");
  div.style.backgroundColor = "none";
  div.style.color = 'black';
  div.id = 'tran_hist_stringbase';
  div.setAttribute('class', 'grid2');
  document.getElementById('tran_hist_string').appendChild(div);
}
