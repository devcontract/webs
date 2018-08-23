
import {state} from './button_disable_enable.js';
import {buyToken} from './button_disable_enable.js'
import {timerId} from './progresbar_module.js'
$(document).ready(function(){
state();
document.getElementById('buy_metamask').addEventListener('click', function(){buyToken()});
timerId();


var token_name = "TAS";
document.getElementById('token_name1').innerHTML = "TAS";
document.getElementById('token_name2').innerHTML = "TAS";
document.getElementById('token_name3').innerHTML = "TAS";
document.getElementById('token_name4').innerHTML = "TAS";
document.getElementById('raised').innerHTML = "123321";
document.getElementById('soft').innerHTML = "9876";
document.getElementById('hard').innerHTML = "44444";
document.getElementById('tokensold').innerHTML = "443434444";
document.getElementById('value_token').innerHTML = "4000";
document.getElementById('paymentaddr').value = "0x66a945a11483e05bedb37474ca29ad6e8656c4f4";
document.getElementById('gLimitBay').innerHTML = "2200";
document.getElementById('gprice').innerHTML = "4000";
document.getElementById('glimval_token_withdr').innerHTML = "2200";
document.getElementById('gprice_token_withdr').innerHTML = "4000";
document.getElementById('glimval_eth_Refund').innerHTML = "2200";
document.getElementById('gprice_eth_Refund').innerHTML = "4000";
document.getElementById('pop_up_window_input').value = document.getElementById('paymentaddr').value;
});
