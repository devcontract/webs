$(document).ready(function(){

$("#arrLeft").css({"visibility":"hidden"});
$("#arrow").css({"visibility":"hidden"});
$("#arrRight").css({"visibility":"hidden"});

    $("#b1").click(function(){
        $("#arrLeft").addClass("current_stage1_bar");
        $("#arrLeft").css({"visibility":"visible"});
$("#arrRight").css({"visibility":"hidden"});
      });

    $("#b2").click(function(){
      $("#arrow").removeClass("current_stage3_bar");
        $("#arrow").addClass("current_stage2_bar");
        $("#arrLeft").css({"visibility":"hidden"});
        $("#arrow").css({"visibility":"visible"});});


        $("#b3").click(function(){
          $("#arrow").removeClass("current_stage2_bar");
          $("#arrow").addClass("current_stage3_bar");});

        $("#b4").click(function(){
          $("#arrow").css({"visibility":"hidden"})
          $("#arrRight").css({"visibility":"visible"});
            $("#arrRight").addClass("current_finished_bar");});



});
