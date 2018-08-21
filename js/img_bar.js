  $(document).ready(function(){
    var state = 0;
    setInterval(function(){
    if (state == 1) {
        changeState("arrLeft" , "current_stage1_bar");
        changeLabelState("label5", "Active");
      }
      if (state == 2 ){
        changeState("arrLeftsloj2", "current_stage2_bar");
        changeState("arrow" , "current_stage3_bar");
          changeLabelState("label5", "Completed");
          changeLabelState("label6", "Active");
      }
    if (state == 3){
        changeState("arrow_Sloj2", "current_stage3_bar")
        changeState("arrow", "current_stage3_bar")
        changeState("arrow2" , "current_stage5_bar");
        changeLabelState("label6", "Completed");
        changeLabelState("label7", "Active");
      }
      if (state == 4){
        changeState("arrow2_Sloj2", "current_stage6_bar")
        changeState("arrow2", "current_stage6_bar")
        changeState("arrRight" , "finished_stage_bar");
      //  changeState("arrRightSloj2", "finished_stage_bar");
        changeLabelState("label7", "Completed");
        changeLabelState("label8", "Active");
        $("#label9").css({"visibility":"visible"});
      } else if (state == 5){
          state = 0;
  defaultAll()
        };
    state++;
  },1000);

function changeState(arrow_name,class_name){
  arrow_name = "#" + arrow_name;
  $(arrow_name).removeClass("default_bar");
  $(arrow_name).addClass(class_name);
  };

function changeLabelState(label_name, text){
  label_name = "#" + label_name;
  $(label_name).text(text);
};

function defaultAll(){
  changeState("arrLeft" , "default_bar");
  changeState("arrLeftsloj2", "default_bar");
  changeState("arrow" , "default_bar");
  changeState("arrow2" , "default_bar");
  changeState("arrow2_Sloj2" , "default_bar");
  changeState("arrow_Sloj2" , "default_bar");
  changeState("arrRight" , "default_bar");
  changeLabelState("label5", "Expectation");
  changeLabelState("label6", "Expectation");
  changeLabelState("label7", "Expectation");
  changeLabelState("label8", "Expectation");
}
});
