// ==UserScript==
// @name         FootAction ATC
// @namespace    none
// @include      *://footaction.com/*
// @version      1.1
// @description  self explaining
// @author       dcvslab
// @match        *://*/*
// @grant        none
// ==/UserScript==
function buy() {
    var sizeid = document.getElementById("pdp_sizes");
    var size = document.getElementById("size_7_BA7996");
    size.click();
    addToCart();
    window.location.replace("http://www.footaction.com/shoppingcart/default.cfm?");
} //end buy()
function start() {
    if (document.getElementById("pdp_timer").getAttribute("style").toString() == "display:none;") {
        buy();
    } else { //start else 1
        if (location.pathname == "/shoppingcart/default.cfm") {
            inventoryCheck_panel.open();
        } else { //start else 2
            location.reload();
        } //end else 2
    } //end if
} //end start()
window.onload = function() { start(); }
