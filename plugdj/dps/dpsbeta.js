//THIS IS WHERE THE SCRIPT WILL BE TESTED BEFORE THE OFFICIAL.
//DCV'S PLUGDJ SCRIPT//ALPHA 05.2 BETA// HTTP://PLUG.DJ/DCV // HTTP://DCVSLAB.GITHUB.IO // DCVSLAB.GITHUB.IO
if (! on) {
var on = "yes"
var release = "ALPHA"; var vnum = "06"; var subvnum = "1"; var commitnum = "4"; var beta = "BETA"
var version = release + " " + vnum + "." + subvnum + "." + commitnum + " " + beta
var user = API.getUser();
var media = API.getMedia();
var history = API.getHistory;
var creator = { username: "DCV", id: "3639711", sub: "1" }
var ucolor;
if (user.gRole > "0") { //get color
	if (user.gRole == "3") { uclass = "ba" }
	else { uclass = "admin" }}
else {
	if (user.role > "0") { uclass = "staff" }
	else { 
		if (user.sub == "1") { uclass = "sub" }
		else { uclass = "you" }}
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
dpsn = dpsn + 1; dpseid = "dps-" + dpsn; dpsid = "dps-" + user.id + "-" + dpsn
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; }
if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  }}
function dpsMessage(cmtype, nameclass, nametext, messagetext) { //one line
  if (! nameclass) { nameclass="" };
  if (! nametext) { nametext=""};
  if (! messagetext) { messagetext="" };
$("#chat-messages").append("<div data-cid='" + dpsid + "' class='cm " + cmtype + "'  stlye='padding-left: 5px'><div class='msg cid-" + dpsid + "' style='padding-left: 10px'><div class ='" + nameclass + "'><span class='un'>" + nametext + "</span><span style='display: inline;' class='timestamp'>" + time + "</span></div><div class='text cid-" + dpsid + "'>" + messagetext +"</div></div></div>");
dpsn = dpsn + 1; dpseid = "dps-" + dpsn; dpsid = "dps-" + user.id + "-" + dpsn 
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; } 
if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  }}
var dpsopt = localStorage.getItem("dpsOpt"); //option stuff (END EDITED DAMS)
if (! dpsopt) { 
var newuser = "true"
var dpsOpt = { "dpsv": version, "awopt": "true", "ajopt": "true", "ssopt": "false", "xppopt": "false", "dpsftropt": "false" };
localStorage.setItem('dpsOpt', JSON.stringify(dpsOpt));
var ldpsOpt = localStorage.getItem('dpsOpt');
var getopt = JSON.parse(ldpsOpt);
var dpsv = getopt.dpsv;
var awopt = getopt.awopt;//function options
var ajopt = getopt.ajopt;
var ssopt = getopt.ssopt; //notification options
var xppopt = getopt.xppopt; //style options
var dpsftropt = getopt.dpsftropt;
} else {
var ldpsOpt = localStorage.getItem('dpsOpt');
var getopt = JSON.parse(ldpsOpt);
var dpsv = getopt.dpsv
var awopt = getopt.awopt;//function options
var ajopt = getopt.ajopt;
var ssopt = getopt.ssopt; //notification options
var xppopt = getopt.xppopt;//style options
var dpsftropt = getopt.dpsftropt; }
function dpsoptUpdate() { //update
  dpsoptPush = { "dpsv": version, "awopt": awopt, "ajopt": ajopt, "ssopt": ssopt, "xppopt": xppopt, "dpsftropt": dpsftropt };
  localStorage.setItem('dpsOpt', JSON.stringify(dpsoptPush));
  ldpsOpt = localStorage.getItem('dpsOpt');
  getopt = JSON.parse(ldpsOpt);
}
if (! awopt) { awopt = "true" }; if (! ajopt) { ajopt = "true" }; if (! ssopt) { ssopt = "true" }; if (! xppopt) { xppopt = "false" }; if (! dpsftropt) { dpsftropt = "false" }; 
setTimeout(function () { 
dpsoptPush = { "dpsv": version, "awopt": awopt, "ajopt": ajopt,"ssopt": ssopt, "xppopt": xppopt, "dpsftropt": dpsftropt };
}, 100);
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
var dpsmcheckaw = document.createElement("i") //create woot check
dpsmcheckaw.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckaj = document.createElement("i") //create autojoin check
dpsmcheckaj.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckss = document.createElement("i") //create song stats check
dpsmcheckss.className = "icon icon-check-purple dpsmcheck";
var dpsmchecknp = document.createElement("i") //create now playing check
dpsmchecknp.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckxpp = document.createElement("i") //create xp to percent check
dpsmcheckxpp.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckdpsftr = document.createElement("i") //create dps footer check
dpsmcheckdpsftr.className = "icon icon-check-purple dpsmcheck";
var dpsmaw = document.createElement("div"); //DPS MENU OPTIONS | autowoot option
var dpsmawtxt = document.createElement("span"); 
dpsmawtxt.innerHTML = "Auto-Woot"; dpsmawtxt.className = "dpsmrowtext"
dpsmaw.className = "dpsmrow";
dpsmaw.appendChild(dpsmawtxt); dpsmaw.appendChild(dpsmcheckaw); dpsmenu.appendChild(dpsmaw);
var dpsmaj = document.createElement("div"); //autojoin option
var dpsmajtxt = document.createElement("span");
dpsmajtxt.innerHTML = "Auto-Join"; dpsmajtxt.className = "dpsmrowtext"
dpsmaj.className = "dpsmrow";
dpsmaj.appendChild(dpsmajtxt); dpsmaj.appendChild(dpsmcheckaj); dpsmenu.appendChild(dpsmaj);
var dpsmss = document.createElement("div"); //song stats option
var dpsmsstxt = document.createElement("span");
dpsmsstxt.innerHTML = "Song Stats"; dpsmsstxt.className = "dpsmrowtext"
dpsmss.className = "dpsmrow";
dpsmss.appendChild(dpsmsstxt); dpsmss.appendChild(dpsmcheckss); dpsmenu.appendChild(dpsmss);
var dpsmnp = document.createElement("div"); //now playing option
var dpsmnptxt = document.createElement("span");
dpsmnptxt.innerHTML = "Now Playing"; dpsmnptxt.className = "dpsmrowtext"
dpsmnp.className = "dpsmrow";
dpsmnp.appendChild(dpsmnptxt); dpsmnp.appendChild(dpsmchecknp); dpsmenu.appendChild(dpsmnp);
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
//FUNCTIONAL SETTINGS//
function dpsAw() { //autowoot//
if (awopt == "true") { 
  document.getElementById("woot").click();
  dpsmcheckaw.style.visibility = "visible" }
else {
  dpsmcheckaw.style.visibility = "hidden"
}}
dpsAw();
function dpsAj() { //autojoin//
  if (ajopt == "true") {
    dpsmcheckaj.style.visibility = "visible" }
  else {
    dpsmcheckaj.style.visibility = "hidden" }}
dpsAj(); 
//NOTIFICATION SETTINGS//
var ssuserid = API.getHistory()[1].user.id //song stats
var ssuser = API.getUser(ssuserid)
var ssucolor;
function dpsSs() { 
if (ssopt == "true") {
  setTimeout(function(){ 
  ssuserid = API.getHistory()[1].user.id
  ssuser = API.getUser(ssuserid)
  ssucolor;
  if (user.id == ssuserid) { if (ssuser.role == "0") { if (ssuser.gRole == "0") { if (ssuser.sub == "0") { ssucolor = "#FFDD6F"}}}} else {
  if (ssuser.gRole > "0") { if (ssuser.gRole == "3") { ssuclass = "ba" } else { ssuclass = "admin" }} else { if (ssuser.role > "0") { ssuclass = "staff" } else { if (ssuser.sub == "1") { ssuclass = "sub" } else { ssuclass = "user" }}
  dpsMessaged("message", "from admin", "SONG STATS","<b class='ssuclass'>" + API.getHistory()[1].user.username + "</b> played <b>" + API.getHistory()[1].media.author + " - " + API.getHistory()[1].media.title + "</b>", "<b class='green'>" + API.getHistory()[1].score.positive + " woots</b> | <b class='red'>" + API.getHistory()[1].score.negative + " mehs</b> | <b class='gpurple'>" + API.getHistory()[0].score.grabs + " grabs</b> | <b class='bluegray'>" + API.getHistory()[1].score.listeners + " listeners</b>" )
  }}}, 500); }}
function dpsssCheck() {if (ssopt == "true") {dpsmcheckss.style.visibility = "visible" } else {dpsmcheckss.style.visibility = "hidden"}}
var dj = API.getDJ() //now playing
var media = API.getMedia()
var djcolor;
function dpsNp() { 
if (npopt == "true") {
  setTimeout(function(){
  dj = API.getDJ(); media = API.getMedia(); djcolor;
  if (user.id == dj.id) { if (dj.role == "0") { if (dj.gRole == "0") { if (dj.sub == "0") { djcolor = "#FFDD6F"}}}} else {
  if (! dj.gRole) { if (dj.role > 0) { djcolor = "#AC76FF" } else { if (dj.sub == 1) { djcolor = "#C59840" } else { djcolor = "#777F92" } } } else { if (dj.gRole == "3") { djcolor = "#89BE6C" } else { djcolor = "#42A5DC" } }
  dpsMessaged("message", "from admin", "NOW PLAYING", "<font color='#DEDEDE'>DJ: </font><b><font color='" + djcolor + "'>" + dj.username + "</font></b>", "<font color='#DEDEDE'>SONG: </font><b>" + media.author + " - " + media.title + "</a></b>")
  }}, 500); }}
function dpsnpCheck() {if (npopt == "true") {dpsmchecknp.style.visibility = "visible" } else {dpsmchecknp.style.visibility = "hidden"}}
//STYLING SETTINGS
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
API.on(API.ADVANCE, function(data) { 
  dpsAw();
  dpsAj();
  dpsSs();
  dpsNp();
})
//MAKING MENU WORK 
var togglemenu = "no" //is needed
var menuclicked = "no" //testing until it's clicked
function menuClicked() { //to set up the menu
 if (menuclicked == "no") {
  setTimeout(function(){ menuclicked = "yes"; }, 0100);
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
  dpsmss.onclick=function(){ if (ssopt == "true") { 
    ssopt = "false"; 
    dpsmcheckss.style.visibility = "hidden"
    dpsoptUpdate(); dpsssCheck() } 
  else { 
    ssopt = "true";
    dpsmcheckss.style.visibility = "visible"
    dpsoptUpdate(); dpsssCheck() }}
  dpsmnp.onclick=function(){ if (npopt == "true") { 
    npopt = "false"; 
    dpsmchecknp.style.visibility = "hidden"
    dpsoptUpdate(); dpsnpCheck() } 
  else { 
    npopt = "true";
    dpsmchecknp.style.visibility = "visible"
    dpsoptUpdate(); dpsnpCheck() }}
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
