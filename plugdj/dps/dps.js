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
ibtn.style.width = bbtn.style.width = stbtn.style.width = pbtn.style.width = sebtn.style.width = ibtn.style.left = bbtn.style.left = stbtn.style.left = pbtn.style.left = sebtn.style.left = "16.6666666%";
var backbtn = document.getElementsByClassName("back")[0] //fix the back button
backbtn.style.width = "83.333333%"
backbtn.style.left = "16.666666%"
var dpsbtn = document.createElement("div"); //create dps button
dpsbtn.id = "dps-button";
dpsbtn.className = "dps button";
dpsbtn.style.right = "83.3333333%"; //a bit of styling
dpsbtn.style.width = "16.66666666%";
dpsbtn.style.zIndex ="1000";
document.body.appendChild(dpsbtn); //put it in the document
var dpslogo = document.createElement("IMG"); //create dps logo
    dpslogo.setAttribute("src", "http://i.imgur.com/1CuQDdE.png");
    dpslogo.setAttribute("width", "69");
    dpslogo.setAttribute("height", "53");
    dpslogo.setAttribute("alt", "dpslogo");
document.getElementById("dps-button").appendChild(dpslogo);
var dpslogox = document.createElement("IMG"); //create dps logo
    dpslogox.setAttribute("src", "http://i.imgur.com/m8QFUVD.png");
    dpslogox.setAttribute("width", "69");
    dpslogox.setAttribute("height", "53");
    dpslogox.setAttribute("alt", "dpslogox");
    document.getElementById("dps-button").appendChild(dpslogox);
document.getElementsByClassName("buttons")[0].appendChild(dpsbtn);
var plbtn = document.getElementsByClassName("bar-button")[1] //to hide button when this is clicked
function hidedpsBtn() { dpsbtn.style.display = "none" }
plbtn.addEventListener("click", hidedpsBtn)
var plbtnx = document.getElementById("playlist-button")
function showdpsBtn() { dpsbtn.style.display = "block" }
function showdpsbtn() { setTimeout(function(){ showdpsBtn(); }, 0200); }
plbtnx.addEventListener("click", showdpsbtn)
var dpsmenu = document.createElement("div"); //create dps menu
dpsmenu.style.backgroundColor = "#282C35"; //styling
dpsmenu.style.right = "345px";
dpsmenu.style.display = "none";
dpsmenu.id = "dpsmenu";
dpsmenu.style.height = "inherit";
dpsmenu.style.width = "345px";
dpsmenu.style.zIndex = "10000";
dpsmenu.style.position = "absolute";
dpsmenu.style.borderBottom = "1px solid #0A0A0A";
var dpsmcheckwoot = document.createElement("i") //create woot check
dpsmcheckwoot.style.left = "0px"; dpsmcheckwoot.className = "icon icon-check-purple"; dpsmcheckwoot.id = "dpsmcheckwoot";
var dpsmcheckaj = document.createElement("i") //create autojoin check
dpsmcheckaj.style.left = "0px"; dpsmcheckaj.className = "icon icon-check-purple"; dpsmcheckaj.id = "dpsmcheckaj";
var dpsmcheckxpp = document.createElement("i") //create xp to percent check
dpsmcheckxpp.style.left = "0px"; dpsmcheckxpp.className = "icon icon-check-purple"; dpsmcheckxpp.id = "dpsmcheckxpp";
var dpsmcheckdpsftr = document.createElement("i") //create dps footer check
dpsmcheckdpsftr.style.left = "0px"; dpsmcheckdpsftr.className = "icon icon-check-purple"; dpsmcheckdpsftr.id = "dpsmcheckdpsftr";
var dpsmwoot = document.createElement("div"); //DPS MENU OPTIONS | woot option
dpsmwoot.style.width = "30px"; dpsmwoot.style.paddingLeft = "30px"
var dpsmwoottxt = document.createElement("span"); 
dpsmwoottxt.textContent="Auto Woot"; dpsmwoottxt.style.lineHeight = "30px"
dpsmwoot.className = "dpsmrow";
dpsmwoot.appendChild(dpsmwoottxt); dpsmwoot.appendChild(dpsmcheckwoot); dpsmenu.appendChild(dpsmwoot);
var dpsmaj = document.createElement("div"); //autojoin option
dpsmaj.style.width = "30px"; dpsmaj.style.paddingLeft = "30px"
var dpsmajtxt = document.createElement("span");
dpsmajtxt.innerHTML = "Auto-Join"; dpsmajtxt.style.lineHeight = "30px"
dpsmaj.className = "dpsmrow";
dpsmaj.appendChild(dpsmajtxt); dpsmaj.appendChild(dpsmcheckaj); dpsmenu.appendChild(dpsmaj);
var dpsmxpp = document.createElement("div"); // xp to percent option
dpsmxpp.style.width = "30px"; dpsmxpp.style.paddingLeft = "30px"
var dpsmxpptxt = document.createElement("span");
dpsmxpptxt.innerHTML = "Change XP To Percent"; dpsmxpptxt.style.lineHeight = "30px"
dpsmxpp.className = "dpsmrow";
dpsmxpp.appendChild(dpsmxpptxt); dpsmxpp.appendChild(dpsmcheckxpp); dpsmenu.appendChild(dpsmxpp);
var dpsmdpsftr = document.createElement("div"); //dps footer option
dpsmdpsftr.style.width = "30px"; dpsmdpsftr.style.paddingLeft = "30px"
var dpsmdpsftrtxt = document.createElement("span");
dpsmdpsftrtxt.innerHTML = "DPS Footer"; dpsmdpsftrtxt.style.lineHeight = "30px"
dpsmdpsftr.className = "dpsmrow";
dpsmdpsftr.appendChild(dpsmdpsftrtxt); dpsmdpsftr.appendChild(dpsmcheckdpsftr); dpsmenu.appendChild(dpsmdpsftr);
document.getElementsByClassName("app-right")[0].style.zIndex = "20" //make it so it's in front
var plugmenu = document.getElementById("app-menu")
document.getElementById("chat").appendChild(dpsmenu);
var infobarclass = document.getElementsByClassName("info")[0]; //change the footer//
infobarclass.id = "infobar";
var infobar = document.getElementById("infobar");
infobar.className = "info showing"; //make the profile info show all the time
infobar.style.left = "17%"; //put the profile info where the buttons are
infobar.style.top = "1px";
infobar.style.zIndex = "1000";
function hideInfo() { infobar.style.display = "none" } //show/hide buttons//
function showInfo() { infobar.style.display = "block" }
var btnsect = document.getElementsByClassName("buttons")[0]
infobar.addEventListener("mouseenter", hideInfo)
btnsect.addEventListener("mouseleave", showInfo)
var togglemenu = "no" //is needed
var menuclicked = "no" //testing until it's clicked
function menuClicked() { //to set up the menu
 if (menuclicked == "no") {
  setTimeout(function(){  
  var dpsmclass = document.getElementsByClassName('dpsmrow'); //change row properties
  for(var i = 0; i < dpsmclass.length; i++) { dpsmclass[i].style.paddingTop = "10px" }
  for(var i = 0; i < dpsmclass.length; i++) { dpsmclass[i].style.paddingLeft = "20px" }
  menuclicked = "yes"
  }, 0100);
}}
function toggleMenu() { //toggle menu
if (togglemenu == "no") {
dpsmenu.style.display = "block"; //toggle some stuff
dpslogo.style.display = "none";
dpslogox.style.display = "block";
togglemenu = "yes"
} else {
dpsmenu.style.display = "none"; //toggle some stuff
dpslogo.style.display = "block";
dpslogox.style.display = "none";
togglemenu = "no"
}}
dpsbtn.addEventListener("click", toggleMenu) 
dpsbtn.addEventListener("click", menuClicked) 
var dpsopt = localStorage.getItem("dpsopt")
if (! dpsopt){
 
}
var wootopt = localStorage.getItem("dpswootopt");//load the options
var autojoinopt = localStorage.getItem("dpsautojoinopt")
var xppercentopt = localStorage.getItem("dpsxppercentopt")
var infoshowingopt = localStorage.getItem("dpswootopt")
API.on(API.ADVANCE, function(data) { document.getElementById("woot").click();}); //autowoot//
API.on(API.ADVANCE, function(data) { API.djJoin();}); //autojoin//
var progress = document.getElementsByClassName("progress")[0]; //change the xp bar to %
progress.id = "progress";
var percent = progress.style.width;
var xpvalue = document.getElementsByClassName("value")[4]
function cP() {
 percent = progress.style.width;
 xpvalue.innerHTML = percent;
}
setInterval(function(){ cP(); }, 10000);
cP()

