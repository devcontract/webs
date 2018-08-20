$(document).ready(function(){

$("#arrLeft").css({"visibility":"hidden"});
$("#arrow").css({"visibility":"hidden"});
$("#arrRight").css({"visibility":"hidden"});
$("#arrLeftsloj2").css({"visibility":"hidden"});
$("#arrow_Sloj2").css({"visibility":"hidden"});
$("#arrRightSloj2").css({"visibility":"hidden"});

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



              $("#b5").click(function(){
                  $("#arrLeftsloj2").addClass("current_stage1_bar_l2");
                  $("#arrLeftsloj2").css({"visibility":"visible"});
                  $("#arrRightSloj2").css({"visibility":"hidden"});
                });

                $("#b6").click(function(){
                $("#arrow_Sloj2").removeClass("current_stage3_bar_l2");
                  $("#arrow_Sloj2").addClass("current_stage2_bar_l2");
                  $("#arrLeftsloj2").css({"visibility":"hidden"});
                  $("#arrow_Sloj2").css({"visibility":"visible"});});


                  $("#b7").click(function(){
                    $("#arrow_Sloj2").removeClass("current_stage2_bar_l2");
                    $("#arrow_Sloj2").addClass("current_stage3_bar_l2");});

                  $("#b8").click(function(){
                    $("#arrow_Sloj2").css({"visibility":"hidden"})
                    $("#arrRightSloj2").css({"visibility":"visible"});
                    $("#arrRightSloj2").addClass("current_finished_bar_l2");});

});
