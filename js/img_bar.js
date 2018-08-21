  $(document).ready(function(){
      $("#b1").click(function(){
        changeState("arrLeft" , "current_stage1_bar");
      });
      $("#b2").click(function(){
        changeState("arrLeftsloj2", "current_stage2_bar")
        changeState("arrow" , "current_stage3_bar");
      });
      $("#b3").click(function(){
        changeState("arrow_Sloj2", "current_stage4_bar")
        changeState("arrow" , "current_stage5_bar");
      });
      $("#b4").click(function(){
        changeState("arrow2_Sloj2", "current_stage6_bar")
        changeState("arrow2", "current_stage6_bar")
        changeState("arrRight" , "finished_stage_bar");
        changeState("arrRightSloj2", "finished_stage_bar");
      });

function changeState(arrow_name,class_name){
  arrow_name = "#" + arrow_name;
$(arrow_name).removeClass("default_bar");
  $(arrow_name).addClass(class_name);
};
});
