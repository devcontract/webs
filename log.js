
   var indexNum = 1;
   var i = 0;

function log(){
   showLog();
  // line();
}

function  showLog(){
     createBase();
     createDiv(rand());
     createDiv(new Date().toDateString("yyyy/MM/dd"));
     createDiv("0x881c8a9f11fb17640df0d6632bddfaf6aa7df3bc67321486afbf892272709d09");
     createDiv("TES");
     createDiv(rand());
     createDiv(rand());
     createButton("pending", "red");
}

function rand(){
   return Math.floor((Math.random() * 8995) + 10);
}
function createButton(data, color){
   var div = document.createElement("button");
   div.innerHTML = data +  "<br><br>";
   div.style.color = color;
   div.style.height = "100%";
   div.id = indexNum;
   div.style.cursor = "pointer";
   div.style.backgroundColor = color;
   div.style.border = 'none';
   div.style.color = "white";
   div.style.height = "30px";
   div.style.paddingTop = "4px";
   div.style.textShadow = '2px 2px black';
   div.setAttribute('class', 'grid2');
   div.setAttribute('onclick', 'window.location.href="https://etherscan.io"');
   document.getElementById('stringbase').appendChild(div);
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
    for (var index = 1; index <= 6; index++) {
       pixel = document.querySelector("#img" + index);
       pixel.setAttribute("height", i);
    }
}
