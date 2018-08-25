$(document).ready(function(){
    $("button").click(function(){
        $.post("https://www.blockonomics.co/api/balance",
         {"addr":"xpub6CS2ANcZdQ4hyXDyPcz9ub1Wr5Y58WSvQQxBGM5iBrtPYq5je2T5cbMJyyz6ySqn8aFnRa8uGHr7XXdT7u36qGL6UV6Ydrev3Xmc1EnTieL"}
        ,
        function(data,status){
            alert("addr: " + data + "\nStatus: " + status);
        });
    });
});
