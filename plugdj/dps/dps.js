//DCV'S PLUGDJ SCRIPT//ALPHA 03// HTTP://PLUG.DJ/DCV // HTTP://DCVSLAB.GITHUB.IO
var dpscss = "<style>" //STYLING (HOPEFULLY TEMPORARY, OTHER WAYS ARE NOT CURRENTLY WORKING)
+".dpsc {"
+"  padding-left: 10px;"
+" } "
+".dpscuser {"
+"  color: #dedede;"
+"  font-weight: 700;"
+" } "
+".dpscuinfo {"
+"  font-weight: 700;"
+"  color: #009CDD;"
+" } "
+"</style>";$("head").append(dpscss);
var userrole = API.getUser().role //get some important vars
var userid = API.getUser().id
var username = API.getUser().username
function getcmBg() {
var cm = document.getElementsByClassName("cm")
var cmlength = cm.length - "1"
var cmbg = $(cm[cmlength]).css("backgroundColor")
cmbgv = " "
if (cmbg == "transparent") { cmbgv = "#111317" } else { cmbgv = "#0A0A0A" }
var dpscm = document.getElementsByClassName("dpscm")
if (dpscm.length == "0") {
  cmbgv = "#111317"
} else {
var dpscml = dpscm.length - "1"
dpscm[dpscml].style.backgroundColor = cmbgv }}
function dpsChat(_text, _class1, _class2) { //borrowed with perms from bcs
if (!_class1 || _class1 == "undefined") {
  _class1 = ""; }
if (!_class2 || _class2 == "undefined") {
  _class2 = ""; }
var _scroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28;
  $("#chat-messages").append(
    "<div class='dpscm" + _class1 + "'>" 
      + "<div class='" + _class2 + "'>" + _text + "</div>"
        + "</div>");
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; }
if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  }
  getcmBg()
}
var plughead = document.getElementsByTagName("head")[0]
var dpsopt = localStorage.getItem("dpsOpt"); //option stuff
if (! dpsopt){ 
var dpsOpt = { "awopt": "true", "ajopt": "true", "xppopt": "false", "dpsftropt": "false" };
localStorage.setItem('dpsOpt', JSON.stringify(dpsOpt));
var ldpsOpt = localStorage.getItem('dpsOpt');
var getopt = JSON.parse(ldpsOpt);
var awopt = getopt.awopt;//load the options
var ajopt = getopt.ajopt;
var xppopt = getopt.xppopt;
var dpsftropt = getopt.dpsftropt;
} else {
var ldpsOpt = localStorage.getItem('dpsOpt');
var getopt = JSON.parse(ldpsOpt);
var awopt = getopt.awopt;//load the options
var ajopt = getopt.ajopt;
var xppopt = getopt.xppopt;
var dpsftropt = getopt.dpsftropt; }
function dpsoptUpdate() { //update
  dpsoptPush = { "awopt": awopt, "ajopt": ajopt, "xppopt": xppopt, "dpsftropt": dpsftropt };
  localStorage.setItem('dpsOpt', JSON.stringify(dpsoptPush));
}
setTimeout(function () {
 dpsoptPush = { "awopt": awopt, "ajopt": ajopt, "xppopt": xppopt, "dpsftropt": dpsftropt };
}, 0100);
var ibtn = document.getElementsByClassName("inventory button")[0]; //SETTING UP THE BUTTON//
var bbtn = document.getElementsByClassName("badge button")[0];
var stbtn = document.getElementsByClassName("store button")[0];
 if(typeof stbtn === 'undefined'){
     stbtn = document.getElementsByClassName("store button notify")[0] };
var pbtn = document.getElementsByClassName("profile button")[0];
 if(typeof pbtn === 'undefined'){
     pbtn = document.getElementsByClassName("profile button notify")[0]; }
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
dpsmcheckwoot.style.left = "0px"; dpsmcheckwoot.className = "icon icon-check-purple"; dpsmcheckwoot.id = "dpsmcheckaw";
var dpsmcheckaj = document.createElement("i") //create autojoin check
dpsmcheckaj.style.left = "0px"; dpsmcheckaj.className = "icon icon-check-purple"; dpsmcheckaj.id = "dpsmcheckaj";
var dpsmcheckxpp = document.createElement("i") //create xp to percent check
dpsmcheckxpp.style.left = "0px"; dpsmcheckxpp.className = "icon icon-check-purple"; dpsmcheckxpp.id = "dpsmcheckxpp";
var dpsmcheckdpsftr = document.createElement("i") //create dps footer check
dpsmcheckdpsftr.style.left = "0px"; dpsmcheckdpsftr.className = "icon icon-check-purple"; dpsmcheckdpsftr.id = "dpsmcheckdpsftr";
var dpsmaw = document.createElement("div"); //DPS MENU OPTIONS | autowoot option
var dpsmawtxt = document.createElement("span"); 
dpsmawtxt.innerHTML = "Auto-Woot"; dpsmawtxt.className = "dpsmrowtext"
dpsmaw.className = "dpsmrow";
dpsmaw.appendChild(dpsmawtxt); dpsmaw.appendChild(dpsmcheckwoot); dpsmenu.appendChild(dpsmaw);
var dpsmaj = document.createElement("div"); //autojoin option
var dpsmajtxt = document.createElement("span");
dpsmajtxt.innerHTML = "Auto-Join"; dpsmajtxt.className = "dpsmrowtext"
dpsmaj.className = "dpsmrow";
dpsmaj.appendChild(dpsmajtxt); dpsmaj.appendChild(dpsmcheckaj); dpsmenu.appendChild(dpsmaj);
var dpsmxpp = document.createElement("div"); // xp to percent option
var dpsmxpptxt = document.createElement("span");
dpsmxpptxt.innerHTML = "Change XP To Percent"; dpsmxpptxt.className = "dpsmrowtext"
dpsmxpp.className = "dpsmrow";
dpsmxpp.appendChild(dpsmxpptxt); dpsmxpp.appendChild(dpsmcheckxpp); dpsmenu.appendChild(dpsmxpp);
var dpsmdpsftr = document.createElement("div"); //dps footer option
var dpsmdpsftrtxt = document.createElement("span");
dpsmdpsftrtxt.innerHTML = "DPS Footer"; dpsmdpsftrtxt.className = "dpsmrowtext"
dpsmdpsftr.className = "dpsmrow"; dpsmdpsftr.id = "dpsmdspftr";
dpsmdpsftr.appendChild(dpsmdpsftrtxt); dpsmdpsftr.appendChild(dpsmcheckdpsftr); dpsmenu.appendChild(dpsmdpsftr);
document.getElementsByClassName("app-right")[0].style.zIndex = "20" //make it so it's in front
document.getElementById("chat").appendChild(dpsmenu);
var togglemenu = "no" //is needed
var menuclicked = "no" //testing until it's clicked
function menuClicked() { //to set up the menu
 if (menuclicked == "no") {
  setTimeout(function(){  
  var dpsmrowclass = document.getElementsByClassName('dpsmrow'); //change row properties
  for(var i = 0; i < dpsmrowclass.length; i++) { 
  dpsmrowclass[i].style.paddingTop = "5px"; 
  dpsmrowclass[i].style.paddingBottom = "5px";
  dpsmrowclass[i].style.paddingLeft = "30px";
  dpsmrowclass[i].style.MozUserSelect = "none";
  dpsmrowclass[i].style.cursor = "pointer"; }
  var dpsmrowtxtclass = document.getElementsByClassName('dpsmrowtext'); //change row properties
  for(var i = 0; i < dpsmrowtxtclass.length; i++) { 
  dpsmrowtxtclass[i].style.paddingTop = "5px"; 
  dpsmrowtxtclass[i].style.paddingBottom = "5px"; 
  dpsmrowtxtclass[i].style.lineHeight = "30px" }
  menuclicked = "yes"; }, 0100);
  dpsmdpsftr.onclick=function(){
    if (dpsftropt == "true") {
  dpsftropt = "false";
  dpsoptUpdate()
  setTimeout(function () { dpsftrChange() }, 0050);
 } else {
  dpsftropt = "true";
  dpsoptUpdate()
  setTimeout(function () { dpsftrChange() }, 0050); }
}}}
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
cP();
var infobarclass = document.getElementsByClassName("info")[0];//change the footer//
infobarclass.id = "infobar"; //var stuff
var infobar = document.getElementById("infobar");
var btnsect = document.getElementsByClassName("buttons")[0];
function hideInfo() { 
  infobar.style.display = "none" 
}
function showInfo() { 
  infobar.style.display = "block" 
}
function dpsftrChange() {
if (dpsftropt == "true") {
infobar.style.left = "17%"; infobar.style.top = "1px"; infobar.style.zIndex = "1000"; //put the profile info where the buttons are
infobar.style.display = "block";
dpsmcheckdpsftr.style.visibility = "visible";
infobar.addEventListener("mouseenter", hideInfo)
dpsbtn.addEventListener("mouseenter", showInfo)
btnsect.addEventListener("mouseleave", showInfo)
pbtn.addEventListener("mouseenter", showInfo); pbtn.addEventListener("mouseleave", hideInfo)
pbtn.removeEventListener("mouseenter", showInfo); pbtn.removeEventListener("mouseleave", hideInfo)
} else {
 infobar.style.left = "17%"; infobar.style.top = "-54px";
 infobar.style.display = "none"
 dpsmcheckdpsftr.style.visibility = "hidden"
 infobar.removeEventListener("mouseenter", hideInfo)
 btnsect.removeEventListener("mouseleave", showInfo)
 dpsbtn.removeEventListener("mouseenter", showInfo)
 pbtn.addEventListener("mouseenter", showInfo); pbtn.addEventListener("mouseleave", hideInfo)
}}
dpsftrChange();
dpsChat("DPS has loaded! vAlpha03", "dpsc", "")
