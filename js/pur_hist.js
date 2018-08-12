
var txHref = "https://etherscan.io";

function logPurHist(){
   showLogPur();
}

function  showLogPur(){
 for (var i = 1; i <= 4; i++) {
     createBasePur();
     createDivPur(i, 20, 15);
     createDivPur("09/07/2018, 06:10:46", 120, 15);
     createDivPur("0x2525821be8215769dd61fc7d25b83fefede62efbcf4a7edac271a87c44e03003", 400, 15);
     createDivPur("0.123323212", 50, 15);
     createDivPur("2.123456789123457", 150, 15);
     createDivPur("99999999", 70, 15);
     createDivPur("99999999", 70, 15);
     createReturnPur();
 }
}

function randPur(){
   return Math.floor((Math.random() * 8995) + 10);
}

function createButtonPur(txHref, data, color, elemWidth, marginLeft){
   var a = document.createElement("a");
   a.innerHTML = data +  "<br><br>";
   a.style.color = color;
   a.style.cursor = "pointer";
   a.style.backgroundColor = color;
   a.style.border = 'none';
   a.style.textDecoration = "none";
   a.style.color = "white";
   a.style.height = "30px";
   a.style.paddingTop = "4px";
   a.style.marginLeft = marginLeft + "px";
   a.style.textShadow = '2px 2px black';
   a.setAttribute('class', 'pur_hist_grid2');
   a.style.width = elemWidth + "px";
   a.setAttribute('href', txHref);
   a.setAttribute('target', '_blank');
   document.getElementById('pur_hist_stringbase').appendChild(a);
}

function createDivPur(data, elemWidth ,marginLeft){
   var div = document.createElement("div");
   div.innerHTML = data;
   div.style.color = 'black';
   div.setAttribute('class', "pur_hist_grid2");
   div.style.width = elemWidth + "px";
   div.style.marginLeft = marginLeft + "px";

   document.getElementById('pur_hist_stringbase').appendChild(div);
}

function createReturnPur(){
   var newElem = document.createElement("BR");
   document.getElementById('pur_hist_stringbase').appendChild(newElem);
}

function createBasePur(){
   var div = document.createElement("div");
   div.style.backgroundColor = "none";
   div.style.color = 'black';
   div.id = 'pur_hist_stringbase';
   div.setAttribute('class', 'grid2');
   document.getElementById('pur_hist_string').appendChild(div);
}
