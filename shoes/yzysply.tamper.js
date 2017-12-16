// ==UserScript==
// @name         YZY SPLY
// @namespace    none
// @include      *://yeezysupply.com/*
// @version      1.01
// @description  autorefresh
// @author       dcvslab
// @match        *://*/*
// @grant        none
// ==/UserScript==
function yzySply() {
  if(window.location.href.indexOf("yeezysupply.com") > -1) { 
    var x = document.getElementsByClassName("PGI__bg js-img-1")[0]
    if (! x) { alert("NULL") }
    else { setTimeout(function(){ location.reload(); }, 5000); }
  }
  else { }
}
window.onload = function() {yzySply()}
