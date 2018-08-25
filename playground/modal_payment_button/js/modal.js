var modal = document.getElementById('paymment_modal');
// When the user clicks the button, open the modal
$("#payment_btn").click(function(){
  $("#payment_modal").css("display", "block");
});

// When the user clicks on <span> (x), close the modal
$(".paymant-modal-close").click(function(){
    $("#payment_modal").css("display", "none");
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        $("#payment_modal").css("display", "none");

    }
};
//
