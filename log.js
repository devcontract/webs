

var indexNum = 1;
var i = 0;
var txHref = "https://etherscan.io";

function log(){
   showLog();
  // line();
 
}

function  showLog(){
var base = document.getElementById('stringbase');
     createBase();
     while (base.hasChildNodes()) {
        base.removeChild(base.firstChild);
    }
     createDiv(rand());
     createDiv(new Date().toDateString("yyyy/MM/dd"));
     createButton("refund", "green");
     createDiv("TES");
     createDiv(rand());
     createDiv(rand());
     createDiv(rand());
     createButton("pending", "red");
}

function rand(){
   return Math.floor((Math.random() * 8995) + 10);
}
function createButton(data, color){
   var a = document.createElement("a");
   a.innerHTML = data +  "<br><br>";
   a.style.color = color;
   a.style.height = "100%";
   a.id = indexNum;
   a.style.cursor = "pointer";
   a.style.backgroundColor = color;
   a.style.border = 'none';
   a.style.color = "white";
   a.style.height = "30px";
   a.style.paddingTop = "4px";
   a.style.textDecoration = "none";
   a.style.textShadow = '2px 2px black';
   a.setAttribute('class', 'grid2');
   a.setAttribute('href', txHref);
   a.setAttribute('target', '_blank');
   document.getElementById('stringbase').appendChild(a);
 }

function createDiv(data){
   var div = document.createElement("div");
   div.innerHTML = data;
   div.style.color = 'black';
   div.setAttribute('class', 'grid2');
   document.getElementById('stringbase').appendChild(div);
}
function createBase(){
   var div = document.createElement("div");
   div.style.backgroundColor = "none";
   div.style.color = 'black';
   div.id = 'stringbase';
   div.setAttribute('class', 'grid2');
   document.getElementById('string').appendChild(div);

}



function line(){
   i = i + 40;
   var pixel;
    for (var index = 1; index <= 7; index++) {
       pixel = document.querySelector("#img" + index);
       pixel.setAttribute("height", i);
    }
}
