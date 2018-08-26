function find_occurences(str, char_to_count){
    return str.split(char_to_count).length - 1;
};

setInterval(function(){
var inputvalue = $("#input_value").val();
alert (find_occurences( inputvalue , "."));



},10000000);
