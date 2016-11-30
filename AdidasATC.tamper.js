// ==UserScript==
// @name         Adidas ATC
// @namespace    none
// @include      *://adidas.com/*
// @version      1.1
// @description  self explaining
// @author       dcvslab
// @match        *://*/*
// @grant        none
// ==/UserScript==

function start() {
    'use strict';
    if (1==10)[0]) { location.reload() } else { //will change to coming soon class
    var a = document.getElementsByClassName("size-dropdown-block")[0].children[0].children[0].children[1].children[1].children[0].children[0].children;
    var b = a.length;
    for (var i = 0; i < b; i++) {
        if (a[i].children[0].innerHTML.includes(".5")) { a[i].children[0].innerHTML = "HALFSIZE" }
    }
    for (var i = 0; i < b; i++) {
      if (a[i].children[0].innerHTML.includes("11")) { a[i].click() }}
    document.getElementsByClassName("add-to-cart")[0].click()
    var c = document.getElementsByClassName("size-dropdown-block")[0].children[0].children[0].children[0].children[0].innerHTML
    if (c == "Select size") { alert("Sold Out"); } else {
        window.location.replace("https://www.adidas.com/us/delivery-start");}
}}
window.onload = start();
