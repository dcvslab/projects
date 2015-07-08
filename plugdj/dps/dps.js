//DCV'S PLUGDJ SCRIPT//
//SETTING UP THE BUTTON//
var ibtn = document.getElementsByClassName("inventory button")[0];
var bbtn = document.getElementsByClassName("badge button")[0];
var stbtn = document.getElementsByClassName("store button")[0];
 if(typeof stbtn === 'undefined'){
     stbtn = document.getElementsByClassName("store button notify")[0] };
var pbtn = document.getElementsByClassName("profile button")[0];
 if(typeof pbtn === 'undefined'){
     pbtn = document.getElementsByClassName("store button notify")[0]; }
var sebtn = document.getElementsByClassName("settings button")[0];
document.getElementById("facebook-menu").remove(); //remove fb
document.getElementById("twitter-menu").remove(); //remove twitter
document.getElementById("footer-user").style.width = "414px";
ibtn.style.width = "16.6666666%";//change the width of all the buttons
bbtn.style.width = "16.6666666%";
stbtn.style.width = "16.6666666%";
pbtn.style.width = "16.6666666%";
sebtn.style.width = "16.6666666%";
ibtn.style.left = "16.6666666%"; //move all the buttons over
bbtn.style.left = "16.6666666%";
stbtn.style.width = "16.6666666%";
pbtn.style.left = "16.6666666%";
sebtn.style.left = "16.6666666%";
var dcvbtn = document.createElement("div"); //create dcv button
dcvbtn.id = "dcv-button";
dcvbtn.className = "dcv button";
dcvbtn.style.right = "83.3333333%"; //a bit of styling
dcvbtn.style.width = "16.66666666%";
dcvbtn.style.zIndex ="1000";
document.body.appendChild(dcvbtn); //put it in the document
var dcvlogo = document.createElement("IMG"); //create dcv logo
    dcvlogo.setAttribute("src", "http://i.imgur.com/1CuQDdE.png");
    dcvlogo.setAttribute("width", "69");
    dcvlogo.setAttribute("height", "53");
    dcvlogo.setAttribute("alt", "dcvlogo");
document.getElementById("dcv-button").appendChild(dcvlogo);
document.getElementsByClassName("buttons")[0].appendChild(dcvbtn);
dcvbtn.addEventListener("click", function(){
    alert("Soon™");
});
API.on(API.ADVANCE, function(data) { document.getElementById("woot").click();}); //autowoot//
API.on(API.ADVANCE, function(data) { API.djJoin();}); //autojoin//
var infobarclass = document.getElementsByClassName("info")[0]; //change the footer//
infobarclass.id = "infobar";
var infobar = document.getElementById("infobar");
infobar.className = "info showing"; //make the profile info show all the time
infobar.style.left = "17%"; //put the profile info where the buttons are
infobar.style.top = "1px";
infobar.style.zIndex = "1000";

