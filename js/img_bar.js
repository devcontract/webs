  $(document).ready(function(){
      $("#b1").click(function(){
        changeState("arrLeft" , "current_stage1_bar");
        changeLabelState("label5", "Active");
      });
      $("#b2").click(function(){
        changeState("arrLeftsloj2", "current_stage2_bar");
        changeState("arrow" , "current_stage3_bar");
          changeLabelState("label5", "Completed");
          changeLabelState("label6", "Active");
      });
      $("#b3").click(function(){
        changeState("arrow_Sloj2", "current_stage3_bar")
        changeState("arrow", "current_stage3_bar")
        changeState("arrow2" , "current_stage5_bar");
        changeLabelState("label6", "Completed");
        changeLabelState("label7", "Active");
      });
      $("#b4").click(function(){
        changeState("arrow2_Sloj2", "current_stage6_bar")
        changeState("arrow2", "current_stage6_bar")
        changeState("arrRight" , "finished_stage_bar");
      //  changeState("arrRightSloj2", "finished_stage_bar");
        changeLabelState("label7", "Completed");
        changeLabelState("label8", "Completed");
        $("#label9").css({"visibility":"visible"});
      });
function changeState(arrow_name,class_name){
  arrow_name = "#" + arrow_name;
  $(arrow_name).removeClass("default_bar");
  $(arrow_name).addClass(class_name);
  };

function changeLabelState(label_name, text){
  label_name = "#" + label_name;
  $(label_name).text(text);
};
});
