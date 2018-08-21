$(document).ready(function(){
var i = 0;
var timerId = setInterval(function(){ if (i >= 5) {i = 0};i++;
$(".bar_state" + i).show();
$(".bar_state" + i - 1 ).hide();
},1000);
};
