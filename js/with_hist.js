
var txHwith = "https://etherscan.io";

function logwithHist(){
   showLog();
}

function  showLog(){
 for (var i = 1; i <= 4; i++) {
     createBase();
     createDiv(i, 20, 15);
     createDiv("09/07/2018, 06:10:46", 120, 15);
     createDiv("0x2525821be8215769dd61fc7d25b83fefede62efbcf4a7edac271a87c44e03003", 400, 15);
     createDiv("0.123323212", 50, 15);
     createDiv("2.123456789123457", 150, 15);
     createDiv("99999999", 70, 15);
     createReturn();
 }
}

function rand(){
   return Math.floor((Math.random() * 8995) + 10);
}

function createButton(txHref, data, color, elemWidth, marginLeft){
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
   a.setAttribute('class', 'with_hist_grid2');
   a.style.width = elemWidth + "px";
   a.setAttribute('href', txHref);
   a.setAttribute('target', '_blank');
   document.getElementById('with_hist_stringbase').appendChild(a);
}

function createDiv(data, elemWidth ,marginLeft){
   var div = document.createElement("div");
   div.innerHTML = data;
   div.style.color = 'black';
   div.setAttribute('class', "with_hist_grid2");
   div.style.width = elemWidth + "px";
   div.style.marginLeft = marginLeft + "px";

   document.getElementById('with_hist_stringbase').appendChild(div);
}

function createReturn(){
   var newElem = document.createElement("BR");
   document.getElementById('with_hist_stringbase').appendChild(newElem);
}

function createBase(){
   var div = document.createElement("div");
   div.style.backgroundColor = "none";
   div.style.color = 'black';
   div.id = 'with_hist_stringbase';
   div.setAttribute('class', 'grid2');
   document.getElementById('with_hist_string').appendChild(div);
}
