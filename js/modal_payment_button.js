var modal_payment_button = document.getElementById('myModal_payment_button');

// Get the button that opens the modal
var btn_payment_button = document.getElementById("myBtn_payment_button");

// Get the <span> element that closes the modal
var span_payment_button = document.getElementsByClassName("close_payment_button")[0];

// When the user clicks the button, open the modal
btn_payment_button.onclick = function() {
    modal_payment_button.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span_payment_button.onclick = function() {
    modal_payment_button.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal_payment_button) {
        modal_payment_button.style.display = "none";
    }
}
