//THIS IS WHERE THE SCRIPT WILL BE TESTED BEFORE THE OFFICIAL.
//DCV'S PLUGDJ SCRIPT//ALPHA 05.1 BETA// HTTP://PLUG.DJ/DCV // HTTP://DCVSLAB.GITHUB.IO // DCVSLAB.GITHUB.IO
if (! on) {
var on = "yes"
var version = "ALPHA 05.1 BETA";
var user = API.getUser();
var creator = {
  username: "DCV",
  id: "3639711",
  sub: "1",
}
var ucolor;
if (user.gRole == "0") { if (user.role > 0) { ucolor = "#AC76FF" } else { if (user.sub == 1) { ucolor = "#C59840" } else { ucolor = "#FFDD6F" } } } else { if (user.gRole == "3") { ucolor = "#89BE6C" } else { ucolor = "#42A5DC" } }
$("head").append("<link rel='stylesheet' type='text/css' href='https://rawgit.com/dcvslab/projects/master/plugdj/dps/styleSheet.css'>");
//DAMS (http://github.com/dcvslab/projects/plugdj/dams.js) (this is an EXTREMELY edited version)
var dpsn = 1; dpseid = "DPS-" + dpsn; var dpsid = "DPS-" + user.id + "-" + dpsn; var time = "DPS";
var _scroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28;
function dpsMessaged(cmtype, nameclass, nametext, messagetext, messagetext2) { //two lines
  if (! nameclass) { nameclass="" };
  if (! nametext) { nametext=""};
  if (! messagetext) { messagetext="" };
  if (! messagetext2) { messagetext2=""};
$("#chat-messages").append("<div data-cid='" + dpsid + "' class='cm " + cmtype + "' stlye='padding-left: 5px'><div class='msg cid-" + dpsid + "' style='padding-left: 10px'><div class ='" + nameclass + "'><span class='un'>" + nametext + "</span><span style='display: inline;' class='timestamp'>" + time + "</span></div><div class='text cid-" + dpsid + "'>" + messagetext +"</div><div class='text cid-" + dpsid + "'>" + messagetext2 +"</div></div></div>");
dpsn = dpsn + 1; dpseid = "dps-" + dpsn; dpsid = "dps-" + user.id + "-" + dpsn }
function dpsMessage(cmtype, nameclass, nametext, messagetext) { //one line
  if (! nameclass) { nameclass="" };
  if (! nametext) { nametext=""};
  if (! messagetext) { messagetext="" };
$("#chat-messages").append("<div data-cid='" + dpsid + "' class='cm " + cmtype + "'  stlye='padding-left: 5px'><div class='msg cid-" + dpsid + "' style='padding-left: 10px'><div class ='" + nameclass + "'><span class='un'>" + nametext + "</span><span style='display: inline;' class='timestamp'>" + time + "</span></div><div class='text cid-" + dpsid + "'>" + messagetext +"</div></div></div>");
dpsn = dpsn + 1; dpseid = "dps-" + dpsn; dpsid = "dps-" + user.id + "-" + dpsn }
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; } //BORROWED WITH PERMISSION FROM BETATESTER/IGOR ADDCHAT SCRIPT
if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  } //BORROWED WITH PERMISSION FROM BETATESTER/IGOR ADDCHAT SCRIPT
var dpsopt = localStorage.getItem("dpsOpt"); //option stuff (END EDITED DAMS)
if (! dpsopt){ 
  var newuser = "true"
var dpsOpt = { "dpsv": version, "awopt": "true", "ajopt": "true", "xppopt": "false", "dpsftropt": "false" };
localStorage.setItem('dpsOpt', JSON.stringify(dpsOpt));
var ldpsOpt = localStorage.getItem('dpsOpt');
var getopt = JSON.parse(ldpsOpt);
var dpsv = getopt.dpsv;
var awopt = getopt.awopt;//load the options
var ajopt = getopt.ajopt;
var xppopt = getopt.xppopt;
var dpsftropt = getopt.dpsftropt;
} else {
var ldpsOpt = localStorage.getItem('dpsOpt');
var getopt = JSON.parse(ldpsOpt);
var dpsv = getopt.dpsv
var awopt = getopt.awopt;//load the options
var ajopt = getopt.ajopt;
var xppopt = getopt.xppopt;
var dpsftropt = getopt.dpsftropt; }
function dpsoptUpdate() { //update
  dpsoptPush = { "dpsv": version, "awopt": awopt, "ajopt": ajopt, "xppopt": xppopt, "dpsftropt": dpsftropt };
  localStorage.setItem('dpsOpt', JSON.stringify(dpsoptPush));
  ldpsOpt = localStorage.getItem('dpsOpt');
  getopt = JSON.parse(ldpsOpt);
}
setTimeout(function () { 
 dpsoptPush = { "dpsv": version, "awopt": awopt, "ajopt": ajopt, "xppopt": xppopt, "dpsftropt": dpsftropt };
}, 0100);
var oldversion = dpsv
dpsoptUpdate()
var ibtn = document.getElementsByClassName("inventory button")[0]; //SETTING UP THE BUTTON//
var bbtn = document.getElementsByClassName("badge button")[0];
var stbtn = document.getElementsByClassName("store button")[0];
var pbtn = document.getElementsByClassName("profile button")[0];
var sebtn = document.getElementsByClassName("settings button")[0];
document.getElementById("facebook-menu").remove(); //remove fb
document.getElementById("twitter-menu").remove(); //remove twitter
document.getElementById("footer-user").style.width = "414px";
ibtn.style.width = bbtn.style.width = stbtn.style.width = pbtn.style.width = sebtn.style.width = ibtn.style.left = bbtn.style.left = stbtn.style.left = pbtn.style.left = sebtn.style.left = "16.6666666%";
var backbtn = document.getElementsByClassName("back")[0] //fix the back button
backbtn.style.width = "83.333333%"; backbtn.style.left = "16.666666%"
var dpsbtn = document.createElement("div"); //create dps button
dpsbtn.id = "dps-button"; dpsbtn.className = "dpsbtn button"; 
document.body.appendChild(dpsbtn); //put it in the document
var dpslogo = document.createElement("IMG"); //create dps logo
    dpslogo.setAttribute("src", "http://i.imgur.com/1CuQDdE.png"); dpslogo.className = "dpsbtnimg"
document.getElementById("dps-button").appendChild(dpslogo);
var dpslogox = document.createElement("IMG"); //create dps logo x
    dpslogox.setAttribute("src", "http://i.imgur.com/m8QFUVD.png"); dpslogox.className = "dpsbtnimg"
    document.getElementById("dps-button").appendChild(dpslogox);
document.getElementsByClassName("buttons")[0].appendChild(dpsbtn);
var plbtn = document.getElementsByClassName("bar-button")[1] //to hide button when this is clicked
function hidedpsBtn() { dpsbtn.style.display = "none" }
plbtn.addEventListener("click", hidedpsBtn)
var plbtnx = document.getElementById("playlist-button")
function showdpsBtn() { dpsbtn.style.display = "block" }
function showdpsbtn() { setTimeout(function(){ showdpsBtn(); }, 0200); }
plbtnx.addEventListener("click", showdpsbtn)
var dpsmenu = document.createElement("div"); dpsmenu.className = "dpsmenu" //create dps menu
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
  dpsmaw.onclick=function(){ if (awopt == "true") { 
    awopt = "false"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsAw() }, 0050); } 
  else { 
    awopt = "true"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsAw() }, 0050); }}
  dpsmaj.onclick=function(){ if (ajopt == "true") { 
    ajopt = "false"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsAj() }, 0050); } 
  else { 
    ajopt = "true"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsAj() }, 0050); }} 
  dpsmxpp.onclick=function(){ if (xppopt == "true") { 
    xppopt = "false"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsXpp() }, 0050); } 
  else { 
    xppopt = "true"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsXpp() }, 0050); }} 
  dpsmdpsftr.onclick=function(){ if (dpsftropt == "true") { 
    dpsftropt = "false"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsftrChange() }, 0050); } 
  else { 
    dpsftropt = "true"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsftrChange() }, 0050); }}
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
function dpsAw() { //autowoot//
if (awopt == "true") { 
  API.on(API.ADVANCE, function(data) { document.getElementById("woot").click();})
  dpsmcheckaw.style.visibility = "visible" }
else {
  dpsmcheckaw.style.visibility = "hidden"
}}
dpsAw();
function dpsAj() { //autojoin//
  if (ajopt == "true") {
    API.on(API.ADVANCE, function(data) { API.djJoin();})
    dpsmcheckaj.style.visibility = "visible" }
  else {
    dpsmcheckaj.style.visibility = "hidden" }}
dpsAj();
var progress = document.getElementsByClassName("progress")[0]; //change the xp bar to %
progress.id = "progress";
var percent = progress.style.width;
var xpvalue = document.getElementsByClassName("value")[4]
var xppspan = document.createElement("span")
var xpbar = document.getElementsByClassName("bar")[0]
xppspan.id = "xppspan"
xppspan.className  = "value"
xppspan.style.display = "none"
xpbar.appendChild(xppspan)
function dpsXpp() {
  if (xppopt == "true") {
    percent = progress.style.width;
    xppspan.innerHTML = percent;
    xpvalue.style.display = "none";
    xppspan.style.display = "block";
    dpsmcheckxpp.style.visibility = "visible";
} else {
    xpvalue.style.display = "block";
    xppspan.style.display = "none";
    dpsmcheckxpp.style.visibility = "hidden";
}}
dpsXpp();
setInterval(function() { dpsXpp() }, 10000)
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
var changelog = "dcvslab.github.io/dps/changelog"
if (newuser == "true") {
  dpsMessaged("system", "from", "DPS has loaded <font color='" + ucolor + "'<b>v" + version + "</b></font>!", "Welcome to DPS, <font color = '" + ucolor + "'><b>" + user.username + "</b></font>!", "Info: <a href='http://dcvslab.github.io/dps'>dcvslab.github.io/dps</a> (COMING SOON)")
} else {
if (version == dpsv) {
  dpsMessage("system", "from", "DPS has loaded <font color='" + ucolor + "'<b>v" + version + "</b></font>!","No new updates since last time, <font color='" + ucolor +"'><b>" + user.username + "</b></font>.")
} else {
  dpsMessaged("system", "from", "DPS has loaded <font color='" + ucolor + "'<b>v" + version + "</b></font>!", "You last used <font color='" + ucolor + "'><b>v" + oldversion + "</b></font>.","Changelog: <a href='http://dcvslab.github.io/dps/changelog.txt'>" + changelog + "</a>")}
}
} else {
  dpsMessage("system", "from", "DPS is already on!", "To reload DPS, refresh the page and click the bookmark again!")
}
