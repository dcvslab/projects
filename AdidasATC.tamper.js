//jshint ignore:start
// ==UserScript==
// @name         Adidas ATC
// @namespace    none
// @include      *://adidas.com/*
// @version      4.1
// @description  self explaining
// @author       dcvslab
// @match        *://*/*
// @grant        none
// ==/UserScript==
function start() {
    if (document.getElementsByClassName("comingsoon-callout-container")[0]) { location.reload() } else { //will change to coming soon class
        var da = document.getElementsByClassName("size-dropdown-block")[0].children[0].children[0].children[1].children[1].children[0].children[0].children;
        var db = da.length;
        var de = document.getElementsByClassName("add-to-cart")[0];

        function dS() {
            var dc = document.getElementsByClassName("size-dropdown-block")[0].children[0].children[0].children[0].children[0].innerHTML
            if (dc == "Select size") { alert("Sold Out"); } else {
            window.location.replace("https://www.adidas.com/us/delivery-start");}
        } //end dS()

        for (var i = 0; i < db; i++) { //FIND SIZES, ORDERED BEST TO WORST
            var dfu = da[i].children[0].innerHTML
            var df = dfu.replace(/\s+/g, '');
                if (df == "11") { da[i].click(); de.click(); dS();}
                else { console.log("11 sold out")}
        } //end fof

    } //end if
} // close start()
start()
//11, 10, 9, 8, 12, 10.5, 9.5, 8.5, 7, 6, 5
