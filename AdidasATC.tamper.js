//jshint ignore:start
// ==UserScript==
// @name         Adidas ATC
// @namespace    none
// @include      *://adidas.com/*
// @version      3.1
// @description  self explaining
// @author       dcvslab
// @match        *://*/*
// @grant        none
// ==/UserScript==
function start() {
  if (document.getElementsByClassName("comingsoon-callout-container")[0]) { location.reload() } else { //will change to coming soon class
    var da = document.getElementsByClassName("size-dropdown-block")[0].children[0].children[0].children[1].children[1].children[0].children[0].children;
    var db = da.length;
    var de = document.getElementsByClassName("add-to-cart")[0]
    function dS() {
        var dc = document.getElementsByClassName("size-dropdown-block")[0].children[0].children[0].children[0].children[0].innerHTML
        if (dc == "Select size") { alert("Sold Out"); } else {
            window.location.replace("https://www.adidas.com/us/delivery-start");}
    }
    var dg = false
    for (var i = 0; i < db; i++) { //FIND SIZES, ORDERED BEST TO WORST
        var df = da[i].children[0].innerHTML
        if (df.includes("11") && dg == false) { if (df.includes(".")) {} else { da[i].click(); de.click(); dS(); dg = true;}} else { 
            if (df.includes("10") && dg == false) { if (df.includes(".")) {} else { da[i].click(); de.click(); dS(); dg = true;}} else {
                if (df.includes("9") && dg == false) { if (df.includes(".")) {} else { da[i].click(); de.click(); dS(); dg = true;}} else {
                    if (df.includes("8") && dg == false) { if (df.includes(".")) {} else { da[i].click(); de.click(); dS(); dg = true;}} else {
                        if (df.includes("12") && dg == false) { if (df.includes(".")) {} else { da[i].click(); de.click(); dS(); dg = true;}} else {
                            if (df.includes("10.5") && dg == false) { da[i].click(); de.click(); dS(); dg = true;} else {
                                if (df.includes("9.5") && dg == false) { da[i].click(); de.click(); dS(); dg = true;} else {
                                    if (df.includes("8.5") && dg == false) { da[i].click(); de.click(); dS(); dg = true;} else {
                                        if (df.includes("11.5") && dg == false) { da[i].click(); de.click(); dS(); dg = true;} else {
                                            if (df.includes("7") && dg == false) { if (df.includes(".")) {} else { da[i].click(); de.click(); dS(); dg = true;}} else { 
                                                if (df.includes("6") && dg == false) { if (df.includes(".")) {} else { da[i].click(); de.click(); dS(); dg = true;}} else {
                                                    if (df.includes("5") && dg == false) { if (df.includes(".")) {} else { da[i].click(); de.click(); dS(); dg = true;}}
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
    }; //for loop function end
   }; //end if function
}; //end start()
window.onload = function() {
    start();
};
//jshint ignore:end
