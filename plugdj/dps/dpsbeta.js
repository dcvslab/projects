//THIS IS WHERE THE SCRIPT WILL BE TESTED BEFORE THE OFFICIAL.
//DCV'S PLUGDJ SCRIPT//ALPHA 05.2 BETA// HTTP://PLUG.DJ/DCV // HTTP://DCVSLAB.GITHUB.IO // DCVSLAB.GITHUB.IO
if (! on) {
var on = "on"
var release = "ALPHA"; var vnum = "06"; var subvnum = "7"; var commitnum = "4"; var beta = "BETA"
var version = release + " " + vnum + "." + subvnum + "." + commitnum + " " + beta
var user = API.getUser();
var media = API.getMedia();
var history = API.getHistory;
var head = document.getElementsByTagName("head")[0]
var creator = { username: "DCV", id: "3639711", sub: "1" }
var roomname = document.getElementsByClassName("bar-value")[0].innerHTML
var uclass;
if (user.gRole > "0") { //get color
	if (user.gRole == "3") { uclass = "dpsba" }
	else { uclass = "dpsadmin" }}
else {
	if (user.role > "0") { uclass = "dpsstaff" }
	else { 
		if (user.sub == "1") { uclass = "dpssub" }
		else { uclass = "dpsyou" }}}
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
$("#chat-messages").append("<div data-cid='" + dpsid + "' class='cm " + cmtype + "' stlye='padding-left: 5px'><div class='msg cid-" + dpsid + "' style='padding-left: 10px'><div class ='" + nameclass + "'><span class='un'>" + nametext + "</span><span style='display: inline;' class='timestamp'>" + time + "</span></div><div class='text cid-" + dpsid + "'>" + messagetext +"</div></div></div>");
dpsn = dpsn + 1; dpseid = "dps-" + dpsn; dpsid = "dps-" + user.id + "-" + dpsn 
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; } 
if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  }}
var dpsopt = localStorage.getItem("dpsOpt"); //option stuff (END EDITED DAMS)
if (! dpsopt) { 
var newuser = "true"
var dpsOpt = { "dpsv": version, "awopt": "true", "ajopt": "true","ujopt": "true", "ulopt": "true", "ssopt": "false", "npopt": "false:", "xppopt": "false", "dpsftropt": "false", "ccopt":{"ub": "false", "on": "false", "admin": "#42A5DC", "ba": "#89BE6C", "staff": "#AC76FF", "sub": "#C59840", "you": "#FFDD6F", "user": "#777F92"} };
localStorage.setItem('dpsOpt', JSON.stringify(dpsOpt));
var ldpsOpt = localStorage.getItem('dpsOpt');
var getopt = JSON.parse(ldpsOpt);
var dpsv = getopt.dpsv;
var awopt = getopt.awopt;//function options
var ajopt = getopt.ajopt;
var ujopt = getopt.ujopt;  //notification options
var ulopt = getopt.ulopt;
var ssopt = getopt.ssopt; 
var npopt = getopt.npopt
var xppopt = getopt.xppopt; //style options
var dpsftropt = getopt.dpsftropt;
var ccopt = getopt.ccopt
} else {
var ldpsOpt = localStorage.getItem('dpsOpt');
var getopt = JSON.parse(ldpsOpt);
var dpsv = getopt.dpsv
var awopt = getopt.awopt;//function options
var ajopt = getopt.ajopt;
var ujopt = getopt.ujopt; //notification options
var ulopt = getopt.ulopt; 
var ssopt = getopt.ssopt; 
var npopt = getopt.npopt
var xppopt = getopt.xppopt;//style options
var dpsftropt = getopt.dpsftropt;
var ccopt = getopt.ccopt }
function dpsoptUpdate() { //update
  dpsoptPush = { "dpsv": version, "awopt": awopt, "ajopt": ajopt,"ujopt": ujopt, "ulopt": ulopt, "ssopt": ssopt,"npopt": npopt, "xppopt": xppopt, "dpsftropt": dpsftropt, "ccopt":{"ub": ccopt.ub, "on": ccopt.on, "admin": ccopt.admin, "ba": ccopt.ba, "staff": ccopt.staff, "sub": ccopt.sub, "you": ccopt.you, "user": ccopt.user} };
  localStorage.setItem('dpsOpt', JSON.stringify(dpsoptPush));
  ldpsOpt = localStorage.getItem('dpsOpt');
  getopt = JSON.parse(ldpsOpt);
}
if (! awopt) { awopt = "true" }; if (! ajopt) { ajopt = "true" }; if (! ssopt) { ssopt = "false" }; if (! xppopt) { xppopt = "false" }; if (! dpsftropt) { dpsftropt = "false" }; if (! npopt) { npopt = "false"}; if (! ulopt) { ulopt = "true" }; if (! ujopt) { ujopt = "true"}; if (! ccopt) { ccopt = {"ub": "false", "on": "false", "admin": "#42A5DC", "ba": "#89BE6C", "staff": "#AC76FF", "sub": "#C59840", "you": "#FFDD6F", "user": "#777F92"} };
setTimeout(function () { 
  dpsoptPush = { "dpsv": version, "awopt": awopt, "ajopt": ajopt,"ujopt": ujopt, "ulopt": ulopt, "ssopt": ssopt,"npopt": npopt, "xppopt": xppopt, "dpsftropt": dpsftropt, "ccopt":{"ub": ccopt.ub, "on": ccopt.on, "admin": ccopt.admin, "ba": ccopt.ba, "staff": ccopt.staff, "sub": ccopt.sub, "you": ccopt.you, "user": ccopt.user} };
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
    dpslogo.setAttribute("src", "https://i.imgur.com/1CuQDdE.png"); dpslogo.className = "dpsbtnimg"
document.getElementById("dps-button").appendChild(dpslogo);
var dpslogox = document.createElement("IMG"); //create dps logo x
    dpslogox.setAttribute("src", "https://i.imgur.com/m8QFUVD.png"); dpslogox.className = "dpsbtnimg"
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
var dpsmcheckuj = document.createElement("i") //create user join check
dpsmcheckuj.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckul = document.createElement("i") //create user leave check
dpsmcheckul.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckss = document.createElement("i") //create song stats check
dpsmcheckss.className = "icon icon-check-purple dpsmcheck";
var dpsmchecknp = document.createElement("i") //create now playing check
dpsmchecknp.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckcc = document.createElement("i") //create custom colors check
dpsmcheckcc.className = "icon icon-check-purple dpsmcheck";
var dpsmpluscc = document.createElement("i") //create custom colors plus
dpsmpluscc.className = "icon icon-add dpsmpm";
var dpsmminuscc = document.createElement("img") //create custom colors minus
dpsmminuscc.setAttribute("src", "http://i.imgur.com/dXRmakc.png"); dpsmminuscc.className = "dpsmpm"
var dpsmcheckxpp = document.createElement("i") //create xp to percent check
dpsmcheckxpp.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckdpsftr = document.createElement("i") //create dps footer check
dpsmcheckdpsftr.className = "icon icon-check-purple dpsmcheck";
var dpsmsectionf = document.createElement("div"); //DPS MENU OPTIONS | functional settings header
var dpsmsectionftxt = document.createElement("span"); 
dpsmsectionftxt.innerHTML = "Functional"; dpsmsectionf.className = "dpsmsection"
dpsmsectionf.appendChild(dpsmsectionftxt); ; dpsmenu.appendChild(dpsmsectionf);
var dpsmaw = document.createElement("div"); //autowoot option
var dpsmawtxt = document.createElement("span"); 
dpsmawtxt.innerHTML = "Auto-Woot"; dpsmawtxt.className = "dpsmrowtext"
dpsmaw.className = "dpsmrow";
dpsmaw.appendChild(dpsmawtxt); dpsmaw.appendChild(dpsmcheckaw); dpsmenu.appendChild(dpsmaw);
var dpsmaj = document.createElement("div"); //autojoin option
var dpsmajtxt = document.createElement("span");
dpsmajtxt.innerHTML = "Auto-Join"; dpsmajtxt.className = "dpsmrowtext"
dpsmaj.className = "dpsmrow";
dpsmaj.appendChild(dpsmajtxt); dpsmaj.appendChild(dpsmcheckaj); dpsmenu.appendChild(dpsmaj);
var dpsmsectionn = document.createElement("div"); //notification settings header
var dpsmsectionntxt = document.createElement("span"); 
dpsmsectionntxt.innerHTML = "Notifications"; dpsmsectionn.className = "dpsmsection";
dpsmsectionn.appendChild(dpsmsectionntxt); dpsmenu.appendChild(dpsmsectionn);
var dpsmuj = document.createElement("div"); //user join option
var dpsmujtxt = document.createElement("span");
dpsmujtxt.innerHTML = "User Join"; dpsmujtxt.className = "dpsmrowtext"
dpsmuj.className = "dpsmrow";
dpsmuj.appendChild(dpsmujtxt); dpsmuj.appendChild(dpsmcheckuj); dpsmenu.appendChild(dpsmuj);
var dpsmul = document.createElement("div"); //user leave option
var dpsmultxt = document.createElement("span");
dpsmultxt.innerHTML = "User Leave"; dpsmultxt.className = "dpsmrowtext"
dpsmul.className = "dpsmrow";
dpsmul.appendChild(dpsmultxt); dpsmul.appendChild(dpsmcheckul); dpsmenu.appendChild(dpsmul);
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
var dpsmsections = document.createElement("div"); //styling settings header
var dpsmsectionstxt = document.createElement("span"); 
dpsmsectionstxt.innerHTML = "Styling"; dpsmsections.className = "dpsmsection";
dpsmsections.appendChild(dpsmsectionstxt); dpsmenu.appendChild(dpsmsections);
var dpsmcc = document.createElement("div"); // custom colors option
var dpsmcctxt = document.createElement("span");
dpsmcctxt.innerHTML = "Custom Colors"; dpsmcctxt.className = "dpsmrowtext"
dpsmcc.className = "dpsmrow";
var dpsmccm = document.createElement("div"); dpsmccm.id = "dpsmccm"; //custom colors menu
dpsmccmatxt = document.createElement("span"); dpsmccmatxt.innerHTML = "Admin"; dpsmccmatxt.className = "dpsmmrow"
dpsmccm.appendChild(dpsmccmatxt); 
var dpsmccmbatxt = document.createElement("span"); dpsmccmbatxt.innerHTML = "Brand Ambassador"; dpsmccmbatxt.className = "dpsmmrow"
dpsmccm.appendChild(dpsmccmbatxt); 
var dpsmccmstxt = document.createElement("span"); dpsmccmstxt.innerHTML = "Staff"; dpsmccmstxt.className = "dpsmmrow"
dpsmccm.appendChild(dpsmccmstxt); 
var dpsmccmsutxt = document.createElement("span"); dpsmccmsutxt.innerHTML = "Subscriber"; dpsmccmsutxt.className = "dpsmmrow"
dpsmccm.appendChild(dpsmccmsutxt); 
dpsmccmytxt = document.createElement("span"); dpsmccmytxt.innerHTML = "You"; dpsmccmytxt.className = "dpsmmrow"
dpsmccm.appendChild(dpsmccmytxt); 
var dpsmccmutxt = document.createElement("span"); dpsmccmutxt.innerHTML = "User"; dpsmccmutxt.className = "dpsmmrow"
dpsmccm.appendChild(dpsmccmutxt); 
dpsmcc.appendChild(dpsmcheckcc); dpsmcc.appendChild(dpsmpluscc); dpsmcc.appendChild(dpsmminuscc); dpsmcc.appendChild(dpsmcctxt); dpsmcc.appendChild(dpsmccm); dpsmenu.appendChild(dpsmcc); 
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
document.getElementsByClassName("app-right")[0].appendChild(dpsmenu);
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
    API.djJoin();
    dpsmcheckaj.style.visibility = "visible" }
  else {
    dpsmcheckaj.style.visibility = "hidden" }}
dpsAj(); 
//NOTIFICATION SETTINGS//
function dpsUj(userj) { //user join
if (ujopt == "true") {
  if (userj.gRole > "0") { if (userj.gRole == "3") { userjc = "dpsba" } else { userjc = "dpsadmin" }} else { if (userj.role > "0") { userjc = "dpsstaff" } else { if (userj.sub == "1") { userjc = "dpssub" } else { userjc = "dpsuser" }}}
  dpsMessage("message", userjc, "<b>" + userj.username + "</b>", "<span class='dpsuj'>has joined.</span>") 
}}
API.on(API.USER_JOIN, dpsUj)
function dpsujCheck() { { if (ujopt == "true") {dpsmcheckuj.style.visibility = "visible" } else {dpsmcheckuj.style.visibility = "hidden" } } }
function dpsUl(userl) { //user leave
if (ulopt == "true") {
  if (userl.gRole > "0") { if (userl.gRole == "3") { userlc = "dpsba" } else { userlc = "dpsadmin" }} else { if (userl.role > "0") { userlc = "dpsstaff" } else { if (userl.sub == "1") { userlc = "dpssub" } else { userlc = "dpsuser" }}}
  dpsMessage("message", userlc, "<b>" + userl.username + "</b>", "<span class='dpsul'>has left.</span>") 
}}
API.on(API.USER_LEAVE, dpsUl)
function dpsulCheck() { { if (ulopt == "true") {dpsmcheckul.style.visibility = "visible" } else {dpsmcheckul.style.visibility = "hidden" } } }
dpsulCheck()
var ssuserid = API.getHistory()[1].user.id //song stats
var ssuser = API.getUser(ssuserid)
var ssucolor;
function dpsSs() { 
if (ssopt == "true") {
  setTimeout(function(){ 
  ssuserid = API.getHistory()[1].user.id
  ssuser = API.getUser(ssuserid)
  ssucolor;
  if (user.id == ssuserid) { if (ssuser.role == "0") { if (ssuser.gRole == "0") { if (ssuser.sub == "0") { ssuclass = "dpsyou"}}}} else {
  if (ssuser.gRole > "0") { if (ssuser.gRole == "3") { ssuclass = "dpsba" } else { ssuclass = "dpsadmin" }} else { if (ssuser.role > "0") { ssuclass = "dpsstaff" } else { if (ssuser.sub == "1") { ssuclass = "dpssub" } else { ssuclass = "dpsuser" }}}}
  dpsMessaged("message", "dpsadmin", "<b>SONG STATS</b>","<b class='" + ssuclass + "'>" + API.getHistory()[1].user.username + "</b> played <b>" + API.getHistory()[1].media.author + " - " + API.getHistory()[1].media.title + "</b>", "<b class='dpsgreen'>" + API.getHistory()[1].score.positive + " woots</b> | <b class='dpsred'>" + API.getHistory()[1].score.negative + " mehs</b> | <b class='dpsgpurple'>" + API.getHistory()[0].score.grabs + " grabs</b> | <b class='dpsbluegray'>" + API.getHistory()[1].score.listeners + " listeners</b>" )
  }, 500); }}
function dpsssCheck() {if (ssopt == "true") {dpsmcheckss.style.visibility = "visible" } else {dpsmcheckss.style.visibility = "hidden"}}
dpsssCheck()
var dj = API.getDJ() //now playing
var media = API.getMedia()
var djclass; var minute; var slength; var minute; var second;
function dpsNp() { 
if (npopt == "true") { 
  setTimeout(function(){
  dj = API.getDJ(); media = API.getMedia(); djclass; slength; minute; second
  slength = media.duration / 60; minute = slength.toString().split(".")[0]
  second = slength.toString().split(".")[1]*.6; second = second.toString(); 
  if (second.split(".")[0].length == 1) { second = "0" + second.split(".")[0] } else { second = second.split(".")[0]; second = second.match(/../g)[0]; }
  if (user.id == dj.id) { if (dj.role == "0") { if (dj.gRole == "0") { if (dj.sub == "0") { djclass = "dpsyou"}}}} else {
 if (dj.gRole > "0") { if (dj.gRole == "3") { djclass = "dpsba" } else { djclass = "dpsadmin" }} else { if (dj.role > "0") { djclass = "dpsstaff" } else { if (dj.sub == "1") { djclass = "dpssub" } else { djclass = "dpsuser" }}}}
  dpsMessaged("message", "dpsadmin", "<b>NOW PLAYING</b>", "<b class='" + djclass + "'>" + dj.username + "</b> is playing <b>" + media.author + " - " + media.title + "</b>" , "It is <b class='" + djclass + "'>" + minute + ":" + second + "</b> long.")
  }, 500); }}
function dpsnpCheck() { if (npopt == "true") { dpsmchecknp.style.visibility = "visible" } else {dpsmchecknp.style.visibility = "hidden" } }
dpsnpCheck()
//STYLING SETTINGS
var cc; //CUSTOM COLORS WOO
function dpsCcc() {
cc = "<style id='cc' type='text/css'>"
+" #chat .from.admin .un {"
+"  color: " + ccopt.admin + ";"
+"  }"
+" #chat .from.ambassador .un {"
+"  color: " + ccopt.ba + ";"
+"  }"
+" #chat .from.staff .un {"
+"  color: " + ccopt.staff + ";"
+"  }"
+" #chat .from.subscriber .un {"
+"  color: " + ccopt.sub + ";"
+"  }"
+" #chat .from.you .un {"
+"  color: " + ccopt.you + ";"
+"  }"
+" #chat .from .un {"
+"  color: " + ccopt.user + ";"
+"  }"
+"</style>";
}
function dpsCca() { $(head).append(cc); };
function dpsCcr() { document.getElementById("cc").remove(); };
if (ccopt.on == "true") { dpsCcc(); dpsCca(); };
function dpsccCheck() { 
	if (ccopt.on == "true") { dpsmcheckcc.style.visibility = "visible"; } 
	else { dpsmcheckcc.style.visibility = "hidden"; }}
var dpsccmsh = "hidden"
function dpsccmSh() { //show hide cc menu
 if (dpsccmsh == "hidden") {
 	dpsccmsh = "visible"
 	dpsmccm.style.display = "block";
 	dpsmpluscc.style.display = "none";
 	dpsmminuscc.style.display = "block";
 } else {
 	dpsccmsh = "hidden"
 	dpsmccm.style.display = "none";
 	dpsmpluscc.style.display = "block";
 	dpsmminuscc.style.display = "none";
}}
dpsccmSh()
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
  dpsmenu.addEventListener( "mouseenter", function() { document.getElementById("user-rollover").style.display = "none" } )
  setTimeout(function(){ menuclicked = "yes"; }, 0100);
  dpsmawtxt.onclick=function(){ if (awopt == "true") { 
    awopt = "false";
    dpsoptUpdate(); 
    setTimeout(function () { dpsAw() }, 0050); } 
  else { 
    awopt = "true"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsAw() }, 0050); }}
  dpsmajtxt.onclick=function(){ if (ajopt == "true") { 
    ajopt = "false";
    dpsoptUpdate(); 
    setTimeout(function () { dpsAj() }, 0050); } 
  else { 
    ajopt = "true";
    dpsoptUpdate(); 
    setTimeout(function () { dpsAj() }, 0050); }} 
  dpsmujtxt.onclick=function(){ if (ujopt == "true") { 
    ujopt = "false"; 
    dpsoptUpdate(); dpsujCheck() } 
  else { 
    ujopt = "true";
    dpsoptUpdate(); dpsujCheck() }}
  dpsmultxt.onclick=function(){ if (ulopt == "true") { 
    ulopt = "false"; 
    dpsoptUpdate(); dpsulCheck() } 
  else { 
    ulopt = "true";
    dpsoptUpdate(); dpsulCheck() }}
  dpsmsstxt.onclick=function(){ if (ssopt == "true") { 
    ssopt = "false"; 
    dpsmcheckss.style.visibility = "hidden"
    dpsoptUpdate(); dpsssCheck() } 
  else { 
    ssopt = "true";
    dpsmcheckss.style.visibility = "visible"
    dpsoptUpdate(); dpsssCheck() }}
  dpsmnptxt.onclick=function(){ if (npopt == "true") { 
    npopt = "false"; 
    dpsmchecknp.style.visibility = "hidden"
    dpsoptUpdate(); dpsnpCheck() } 
  else { 
    npopt = "true";
    dpsmchecknp.style.visibility = "visible"
    dpsoptUpdate(); dpsnpCheck() }}
  dpsmcctxt.onclick=function(){ if (ccopt.on == "true") { 
    ccopt.on = "false"; 
    dpsoptUpdate(); dpsccCheck()
    setTimeout(function () { dpsCcr() }, 0050); } 
  else { 
    ccopt.on = "true"; 
    dpsoptUpdate(); dpsccCheck()
    setTimeout(function () { dpsCcc(); dpsCca(); }, 0050); }} 
  dpsmpluscc.addEventListener("click", dpsccmSh); dpsmminuscc.addEventListener("click", dpsccmSh)
  dpsmxpptxt.onclick=function(){ if (xppopt == "true") { 
    xppopt = "false"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsXpp() }, 0050); } 
  else { 
    xppopt = "true"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsXpp() }, 0050); }} 
  dpsmdpsftrtxt.onclick=function(){ if (dpsftropt == "true") { 
    dpsftropt = "false"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsftrChange() }, 0050); } 
  else { 
    dpsftropt = "true"; 
    dpsoptUpdate(); 
    setTimeout(function () { dpsftrChange() }, 0050); }}

dpsssCheck()
dpsnpCheck()
dpsccCheck()
dpsccmSh()
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
var messagesent = "false"
if (newuser == "true") {
  dpsMessaged("system", "from", "DPS has loaded <b class='" + uclass + "'>v" + version + "</b>!", "Welcome to DPS, <b class='" + uclass + "'>" + user.username + "</b>!", "Info: <a href='http://dcvslab.github.io/dps'>dcvslab.github.io/dps</a> (COMING SOON)")
  messagesent = "true"
} else {
if (version == dpsv) {
  dpsMessage("system", "from", "DPS has loaded <b class='" + uclass + "'>v" + version + "</b>!","No new updates since last time, <b class='" + uclass + "'>" + user.username + "</b>.")
  messagesent = "true"
} else {
  dpsMessaged("system", "from", "DPS has loaded <b class='" + uclass + "'>v" + version + "</b>!", "You last used <b class='" + uclass + "'>v" + oldversion + "</b>.","Changelog: <a href='http://dcvslab.github.io/dps/changelog.txt'>" + changelog + "</a>")
  messagesent = "true"
}}
} else {
 dpsMessage("system", "from", "DPS is already on!", "To reload DPS, refresh the page and click the bookmark again!")
}

