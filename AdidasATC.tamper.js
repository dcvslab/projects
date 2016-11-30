//jshint ignore:start
// ==UserScript==
// @name         Adidas ATC
// @namespace    none
// @include      *://adidas.com/*
// @version      2.3
// @description  self explaining
// @author       dcvslab
// @match        *://*/*
// @grant        none
// ==/UserScript==
function start() {
    if (1==10) { location.reload() } else { //will change to coming soon class
    var a = document.getElementsByClassName("size-dropdown-block")[0].children[0].children[0].children[1].children[1].children[0].children[0].children;
    var b = a.length;
    for (var i = 0; i < b; i++) {
        if (a[i].children[0].innerHTML.includes(".5")) { var d = a[i].children[0].innerHTML.replace(".", "0"); a[i].children[0].innerHTML = d  }
    }
    for (var i = 0; i < b; i++) {
      if (a[i].children[0].innerHTML.includes("11")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("10")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("9")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("8")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("12")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("1005")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("905")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("805")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("805")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("1105")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("7")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("6")) { a[i].click() }
      else { if (a[i].children[0].innerHTML.includes("5")) { a[i].click() }
     }}}}}}}}}}}}}
    document.getElementsByClassName("add-to-cart")[0].click()
    var c = document.getElementsByClassName("size-dropdown-block")[0].children[0].children[0].children[0].children[0].innerHTML
    if (c == "Select size") { alert("Sold Out"); } else {
        window.location.replace("https://www.adidas.com/us/delivery-start");}
}};
window.onload = function() {
    start();
};
//jshint ignore:end
