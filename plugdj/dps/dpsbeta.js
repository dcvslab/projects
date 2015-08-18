//DCV'S PLUGDJ SCRIPT//ALPHA 07 BETA// HTTP://PLUG.DJ/DCV // HTTP://DCVSLAB.GITHUB.IO // DCVSLAB.GITHUB.IO
if (! on) {
var on = "on"
var release = "ALPHA"; var vnum = "7"; var subvnum = "3"; var commitnum = "7"; var beta = "BETA"
var version = release + " " + vnum + "." + subvnum + "." + commitnum + " " + beta;
var sversion = release + "-" + vnum + "-" + subvnum + "-" + commitnum;
var user = API.getUser();
var media = API.getMedia();
var history = API.getHistory;
var head = document.getElementsByTagName("head")[0]
var creator = { username: "DCV", id: "3639711", sub: "1" }
var vip = [ "3639711", "4820534", "6323268", "4764565", "5344087", "3542315"]; var viplength = vip.length; //CURRENT VIPS: DCV, BETA TESTER, COOKIE TESTER, WUMBOLOGY, PIKAWUBZ, VITALCZ
var roomname = document.getElementsByClassName("bar-value")[0].innerHTML
var badoop = new Audio(); badoop.src = "https://cdn.plug.dj/_/static/sfx/badoop.801a12ca13864e90203193b2c83c019c03a447d1.mp3"; badoop.load();
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
document.getElementsByTagName("script")[10].remove()
$("head").append("<script>window.intercomSettings = { 'app_id': 'lkxjc4ae', 'name': API.getUser().username, 'email':  sversion + '@' + API.getUser().id + '.com', };(function(){var w=window;var ic=w.Intercom;if(typeof ic==='function'){ic('reattach_activator');ic('update',intercomSettings);}else{var d=document;var i=function(){i.c(arguments)};i.q=[];i.c=function(args){i.q.push(args)};w.Intercom=i;function l(){var s=d.createElement('script');s.type='text/javascript';s.async=true;s.src='https://widget.intercom.io/widget/lkxjc4ae';var x=d.getElementsByTagName('script')[0];x.parentNode.insertBefore(s,x);}if(w.attachEvent){w.attachEvent('onload',l);}else{w.addEventListener('load',l,false);}}})()</script>")
setInterval(function(){ Intercom('update'); console.log("IntercomUpdate"); }, 15000);
var dpsn = 1; dpseid = "DPS-" + dpsn; var dpsid = "DPS-" + user.id + "-" + dpsn; var time = "DPS";
var _scroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28;
function dpsMessaged(cmtype, nameclass, nametext, messagetext, messagetext2) { //two lines
  if (! nameclass) { nameclass="" };
  if (! nametext) { nametext=""};
  if (! messagetext) { messagetext="" };
  if (! messagetext2) { messagetext2=""};
$("#chat-messages").append("<div data-cid='" + dpsid + "' class='dpsmsg cm " + cmtype + "' style='padding-left: 5px'><div class='msg cid-" + dpsid + "' style='padding-left: 10px'><div class ='" + nameclass + "'><span class='un'>" + nametext + "</span><span style='display: inline;' class='timestamp'>" + time + "</span></div><div class='text cid-" + dpsid + "'>" + messagetext +"</div><div class='text cid-" + dpsid + "'>" + messagetext2 +"</div></div></div>");
dpsn = dpsn + 1; dpseid = "dps-" + dpsn; dpsid = "dps-" + user.id + "-" + dpsn
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; }
if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  }}
function dpsMessage(cmtype, nameclass, nametext, messagetext) { //one line
  if (! nameclass) { nameclass="" };
  if (! nametext) { nametext=""};
  if (! messagetext) { messagetext="" };
$("#chat-messages").append("<div data-cid='" + dpsid + "' class='dpsmsg cm " + cmtype + "' stlye='padding-left: 5px'><div class='msg cid-" + dpsid + "' style='padding-left: 10px'><div class ='" + nameclass + "'><span class='un'>" + nametext + "</span><span style='display: inline;' class='timestamp'>" + time + "</span></div><div class='text cid-" + dpsid + "'>" + messagetext +"</div></div></div>");
dpsn = dpsn + 1; dpseid = "dps-" + dpsn; dpsid = "dps-" + user.id + "-" + dpsn 
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; } 
if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  }}
var timeon = 0; setInterval(function(){timeon = timeon + 1; }, 1000);
var dpsopt = localStorage.getItem("dpsOpt"); //option stuff 
if (! dpsopt) { 
var newuser = "true"
var dpsOpt = { "dpsv": version, "awopt": "true", "ajopt": "true","uwopt": "false", "umopt": "true", "ujopt": "true", "ulopt": "true", "haopt":{"on": "true", "pos": "1"}, "ssopt": "false", "npopt": "false:", "xppopt": "false", "dpsftropt": "false", "ccopt":{"ub": "false", "on": "false", "admin": "#42A5DC", "ba": "#89BE6C", "staff": "#AC76FF", "sub": "#C59840", "you": "#FFDD6F", "user": "#777F92"} };
localStorage.setItem('dpsOpt', JSON.stringify(dpsOpt));
var ldpsOpt = localStorage.getItem('dpsOpt');
var getopt = JSON.parse(ldpsOpt);
var dpsv = getopt.dpsv;
var awopt = getopt.awopt;//function options
var ajopt = getopt.ajopt;
var uwopt = getopt.uwopt; //notification options
var umopt = getopt.umopt; 
var ujopt = getopt.ujopt;  
var ulopt = getopt.ulopt;
var haopt = getopt.haopt;
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
var uwopt = getopt.uwopt; //notification options
var umopt = getopt.umopt; 
var ujopt = getopt.ujopt; 
var ulopt = getopt.ulopt; 
var haopt = getopt.haopt;
var ssopt = getopt.ssopt; 
var npopt = getopt.npopt
var xppopt = getopt.xppopt;//style options
var dpsftropt = getopt.dpsftropt;
var ccopt = getopt.ccopt }
function dpsoptUpdate() { //update
  dpsoptPush = { "dpsv": version, "awopt": awopt, "ajopt": ajopt,"uwopt": uwopt, "umopt": umopt, "ujopt": ujopt, "ulopt": ulopt,"haopt":{"on": haopt.on, "pos": haopt.pos}, "ssopt": ssopt,"npopt": npopt, "xppopt": xppopt, "dpsftropt": dpsftropt, "ccopt":{"ub": ccopt.ub, "on": ccopt.on, "admin": ccopt.admin, "ba": ccopt.ba, "staff": ccopt.staff, "sub": ccopt.sub, "you": ccopt.you, "user": ccopt.user} };
  localStorage.setItem('dpsOpt', JSON.stringify(dpsoptPush));
  ldpsOpt = localStorage.getItem('dpsOpt');
  getopt = JSON.parse(ldpsOpt);
}
if (! awopt) { awopt = "true" }; if (! ajopt) { ajopt = "true" }; if (! ssopt) { ssopt = "false" }; if (! xppopt) { xppopt = "false" }; if (! dpsftropt) { dpsftropt = "false" }; if (! npopt) { npopt = "false"}; if (! ulopt) { ulopt = "true" }; if (! ujopt) { ujopt = "true"}; if (! ccopt) { ccopt = {"ub": "false", "on": "false", "admin": "#42A5DC", "ba": "#89BE6C", "staff": "#AC76FF", "sub": "#C59840", "you": "#FFDD6F", "user": "#777F92"} }; if (! haopt) { haopt = {"on": "true", "pos": "1"} }; if (! uwopt) { uwopt = "false" }; if (! umopt) { umopt = "true" };
setTimeout(function () { 
  dpsoptPush = { "dpsv": version, "awopt": awopt, "ajopt": ajopt,"uwopt": uwopt, "umopt": umopt, "ujopt": ujopt, "ulopt": ulopt,"haopt":{"on": haopt.on, "pos": haopt.pos}, "ssopt": ssopt,"npopt": npopt, "xppopt": xppopt, "dpsftropt": dpsftropt, "ccopt":{"ub": ccopt.ub, "on": ccopt.on, "admin": ccopt.admin, "ba": ccopt.ba, "staff": ccopt.staff, "sub": ccopt.sub, "you": ccopt.you, "user": ccopt.user} };
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
var dpsmenu = document.createElement("div"); dpsmenu.className = "dpsmenu"; //create dps menu
var dpsmcheckaw = document.createElement("i") //create woot check
dpsmcheckaw.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckaj = document.createElement("i") //create autojoin check
dpsmcheckaj.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckuw = document.createElement("i") //create user woot check
dpsmcheckuw.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckum = document.createElement("i") //create user meh check
dpsmcheckum.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckuj = document.createElement("i") //create user join check
dpsmcheckuj.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckul = document.createElement("i") //create user leave check
dpsmcheckul.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckha = document.createElement("i") //create history alert check
dpsmcheckha.className = "icon icon-check-purple dpsmcheck";
var dpsmplusha = document.createElement("i") //create history alert plus
dpsmplusha.className = "icon icon-add dpsmpm";
var dpsmminusha = document.createElement("img") //create history alert minus
dpsmminusha.setAttribute("src", "https://i.imgur.com/dXRmakc.png"); dpsmminusha.className = "dpsmpm"
var dpsmcheckss = document.createElement("i") //create song stats check
dpsmcheckss.className = "icon icon-check-purple dpsmcheck";
var dpsmchecknp = document.createElement("i") //create now playing check
dpsmchecknp.className = "icon icon-check-purple dpsmcheck";
var dpsmcheckcc = document.createElement("i") //create custom colors check
dpsmcheckcc.className = "icon icon-check-purple dpsmcheck";
var dpsmpluscc = document.createElement("i") //create custom colors plus
dpsmpluscc.className = "icon icon-add dpsmpm";
var dpsmminuscc = document.createElement("img") //create custom colors minus
dpsmminuscc.setAttribute("src", "https://i.imgur.com/dXRmakc.png"); dpsmminuscc.className = "dpsmpm"
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
var dpsmuw = document.createElement("div"); //user woot option
var dpsmuwtxt = document.createElement("span");
dpsmuwtxt.innerHTML = "User Woot"; dpsmuwtxt.className = "dpsmrowtext"
dpsmuw.className = "dpsmrow";
dpsmuw.appendChild(dpsmuwtxt); dpsmuw.appendChild(dpsmcheckuw); dpsmenu.appendChild(dpsmuw);
var dpsmum = document.createElement("div"); //user meh option
var dpsmumtxt = document.createElement("span");
dpsmumtxt.innerHTML = "User Meh"; dpsmumtxt.className = "dpsmrowtext"
dpsmum.className = "dpsmrow";
dpsmum.appendChild(dpsmumtxt); dpsmum.appendChild(dpsmcheckum); dpsmenu.appendChild(dpsmum); //u wot m8 i'll rek ye dpsmum
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
var dpsmha = document.createElement("div"); //history alert option
var dpsmhatxt = document.createElement("span");
dpsmhatxt.innerHTML = "History Alert"; dpsmhatxt.className = "dpsmrowtext"
dpsmha.className = "dpsmrow";
dpsmha.appendChild(dpsmhatxt); dpsmha.appendChild(dpsmcheckha); dpsmha.appendChild(dpsmplusha); dpsmha.appendChild(dpsmminusha); dpsmenu.appendChild(dpsmha);
var dpsmham = document.createElement("div"); dpsmham.style.display = "none"; dpsmham.id = "dpsmham"; dpsmham.className = "dpsmoptm"; dpsmham.style.height = "-moz-calc(100% / 2)" //history alerts menu
var dpsmhamtitle = document.createElement("div"); var dpsmhamtitletxt = document.createElement("span"); dpsmhamtitletxt.innerHTML = "History Alert"; dpsmhamtitle.appendChild(dpsmhamtitletxt); dpsmhamtitle.className = "dpsmsection"; dpsmham.appendChild(dpsmhamtitle)
var dpsmhamo = document.createElement("div"); dpsmhamo.className = "dpsmmrow"; dpsmhamo.style.paddingLeft = "15px"; 
	var dpsmhamotxt = document.createElement("span"); dpsmhamotxt.className = "dpsmmrowtext"; dpsmhamotxt.innerHTML = "Enter what waitlist position you would like to be alerted that your song is in the history."; 
	var dpsmhamoinputdiv = document.createElement("div");
	var dpsmhamoinput = document.createElement("input"); dpsmhamoinput.className = "dpsmccinput"; dpsmhamoinput.style.border = "1px solid #925AFF"; dpsmhamoinput.value = haopt.pos; dpsmhamoinput.style.float = "none"; dpsmhamoinput.style.width = "96%"; dpsmhamoinput.style.marginRight = "0px";  dpsmhamoinput.style.textAlign = "center"
	$(dpsmhamo).append(dpsmhamotxt); $(dpsmhamoinputdiv).append(dpsmhamoinput); $(dpsmhamo).append(dpsmhamoinputdiv); $(dpsmham).append(dpsmhamo);
	var dpsmhamb = document.createElement("button"); dpsmhamb.className = "dpsmmbtn"; dpsmhamb.innerHTML = "Apply"; dpsmhamb.style.width = "100%"; $(dpsmham).append(dpsmhamb);
	dpsmha.appendChild(dpsmcheckha); dpsmha.appendChild(dpsmplusha); dpsmha.appendChild(dpsmminusha); dpsmha.appendChild(dpsmhatxt); document.getElementsByClassName("app-right")[0].appendChild(dpsmham); dpsmenu.appendChild(dpsmha); 
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
var dpsmccm = document.createElement("div"); dpsmccm.style.display = "none"; dpsmccm.id = "dpsmccm"; dpsmccm.className = "dpsmoptm" //custom colors menu
var dpsmccmtitle = document.createElement("div"); var dpsmccmtitletxt = document.createElement("span"); dpsmccmtitletxt.innerHTML = "Custom Colors"; dpsmccmtitle.appendChild(dpsmccmtitletxt); dpsmccmtitle.className = "dpsmsection"; dpsmccm.appendChild(dpsmccmtitle)
 var dpsmccma = document.createElement("div"); dpsmccma.className = "dpsmmrow"; 
	var dpsmccmatxt = document.createElement("span"); dpsmccmatxt.className = "dpsmmrowtext"; dpsmccmatxt.innerHTML = "Admin"; 
	var dpsmccmainput = document.createElement("input"); dpsmccmainput.className = "dpsmccinput"; dpsmccmainput.setAttribute("maxlength", "7"); dpsmccmainput.style.border = "1px solid " + ccopt.admin; dpsmccmainput.value = ccopt.admin
	$(dpsmccma).append(dpsmccmatxt); $(dpsmccma).append(dpsmccmainput); $(dpsmccm).append(dpsmccma);
 var dpsmccmba = document.createElement("div"); dpsmccmba.className = "dpsmmrow"; 
	var dpsmccmbatxt = document.createElement("span"); dpsmccmbatxt.className = "dpsmmrowtext"; dpsmccmbatxt.innerHTML = "Brand Ambassador"; 
	var dpsmccmbainput = document.createElement("input"); dpsmccmbainput.className = "dpsmccinput"; dpsmccmbainput.setAttribute("maxlength", "7"); dpsmccmbainput.style.border = "1px solid " + ccopt.ba; dpsmccmbainput.value = ccopt.ba
	$(dpsmccmba).append(dpsmccmbatxt) ;$(dpsmccmba).append(dpsmccmbainput); $(dpsmccm).append(dpsmccmba);
var dpsmccms = document.createElement("div"); dpsmccms.className = "dpsmmrow"; 
	var dpsmccmstxt = document.createElement("span"); dpsmccmstxt.className = "dpsmmrowtext"; dpsmccmstxt.innerHTML = "Staff"; 
	var dpsmccmsinput = document.createElement("input"); dpsmccmsinput.className = "dpsmccinput"; dpsmccmsinput.setAttribute("maxlength", "7"); dpsmccmsinput.style.border = "1px solid " + ccopt.staff; dpsmccmsinput.value = ccopt.staff
	$(dpsmccms).append(dpsmccmstxt) ;$(dpsmccms).append(dpsmccmsinput); $(dpsmccm).append(dpsmccms);
var dpsmccmsu = document.createElement("div"); dpsmccmsu.className = "dpsmmrow"; dpsmccmsu.id = "dpsmccmsu"
	var dpsmccmsutxt = document.createElement("span"); dpsmccmsutxt.className = "dpsmmrowtext"; dpsmccmsutxt.innerHTML = "Subscriber"; 
	var dpsmccmsuinput = document.createElement("input"); dpsmccmsuinput.className = "dpsmccinput"; dpsmccmsuinput.setAttribute("maxlength", "7"); dpsmccmsuinput.style.border = "1px solid " + ccopt.sub; dpsmccmsuinput.value = ccopt.sub
	$(dpsmccmsu).append(dpsmccmsutxt) ;$(dpsmccmsu).append(dpsmccmsuinput); $(dpsmccm).append(dpsmccmsu);
var dpsmccmy = document.createElement("div"); dpsmccmy.className = "dpsmmrow"; 
	var dpsmccmytxt = document.createElement("span"); dpsmccmytxt.className = "dpsmmrowtext"; dpsmccmytxt.innerHTML = "You"; 
	var dpsmccmyinput = document.createElement("input"); dpsmccmyinput.className = "dpsmccinput"; dpsmccmyinput.setAttribute("maxlength", "7"); dpsmccmyinput.style.border = "1px solid " + ccopt.you; dpsmccmyinput.value = ccopt.you
	$(dpsmccmy).append(dpsmccmytxt) ;$(dpsmccmy).append(dpsmccmyinput); $(dpsmccm).append(dpsmccmy);
var dpsmccmu = document.createElement("div"); dpsmccmu.className = "dpsmmrow"; 
	var dpsmccmutxt = document.createElement("span"); dpsmccmutxt.className = "dpsmmrowtext"; dpsmccmutxt.innerHTML = "User"; 
	var dpsmccmuinput = document.createElement("input"); dpsmccmuinput.className = "dpsmccinput"; dpsmccmuinput.setAttribute("maxlength", "7"); dpsmccmuinput.style.border = "1px solid " + ccopt.user; dpsmccmuinput.value = ccopt.user
	$(dpsmccmu).append(dpsmccmutxt) ;$(dpsmccmu).append(dpsmccmuinput); $(dpsmccm).append(dpsmccmu);
var dpsmccmr = document.createElement("button"); dpsmccmr.className = "dpsmmbtn"; dpsmccmr.innerHTML = "Reset"; $(dpsmccm).append(dpsmccmr);
var dpsmccma = document.createElement("button"); dpsmccma.className = "dpsmmbtn"; dpsmccma.innerHTML = "Apply"; dpsmccma.style.right = "0px"; $(dpsmccm).append(dpsmccma); 
dpsmcc.appendChild(dpsmcheckcc); dpsmcc.appendChild(dpsmpluscc); dpsmcc.appendChild(dpsmminuscc); dpsmcc.appendChild(dpsmcctxt); document.getElementsByClassName("app-right")[0].appendChild(dpsmccm); dpsmenu.appendChild(dpsmcc); 
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
  setTimeout(function(){   document.getElementById("woot").click(); }, 500);
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
var uwa = ["uwa"] //user woot
var usersl = API.getUsers().length; for (var i = 0; i < usersl; i++) { if (API.getUsers()[i].vote == 1) { uwa.push(API.getUsers()[i].id)}}
function dpsUw(userw) {
var umal = uma.length; for (var i = 0; i < umal; i++) { if (uma[i] == userw.user.id) { uma.splice(i, 1) }};
uwa.push(userw.user.id)
if (uwopt == "true") {
  if (userw.vote == 1) {
  if (userw.user.gRole > "0") { if (userw.user.gRole == "3") { userwc = "dpsba" } else { userwc = "dpsadmin" }} else { if (userw.user.role > "0") { userwc = "dpsstaff" } else { if (userw.user.sub == "1") { userwc = "dpssub" } else { userwc = "dpsuser" }}}
  dpsMessage("message", userwc, "<b>" + userw.user.username + "</b>", "<span class='dpsgreen'>has wooted.</span>")
}}} API.on(API.VOTE_UPDATE, dpsUw);
function dpsUwar() { uwa = ["uwa"] }; API.on(API.ADVANCE, dpsUwar);
var uma = ["uma"] //user meh
var usersl = API.getUsers().length; for (var i = 0; i < usersl; i++) { if (API.getUsers()[i].vote == -1) { uma.push(API.getUsers()[i].id)}}
function dpsUm(userm) {
var uwal = uwa.length; for (var i = 0; i < uwal; i++) { if (uwa[i] == userm.user.id) { uwa.splice(i, 1) }};
uma.push(userm.user.id)
if (umopt == "true") {
  if (userm.vote == -1) {
  if (userm.user.gRole > "0") { if (userm.user.gRole == "3") { usermc = "dpsba" } else { usermc = "dpsadmin" }} else { if (userm.user.role > "0") { usermc = "dpsstaff" } else { if (userm.user.sub == "1") { usermc = "dpssub" } else { usermc = "dpsuser" }}}
  uma.push(userm.user.id)
  dpsMessage("message", usermc, "<b>" + userm.user.username + "</b>", "<span class='dpsred'>has mehed.</span>")
}}} API.on(API.VOTE_UPDATE, dpsUm);
function dpsumar() { uma = ["uma"] }; API.on(API.ADVANCE, dpsumar);
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
var nextmedia = API.getNextMedia()
var wlpos = API.getWaitListPosition()
function dpsHa() {
  if (haopt.on == "true") {
  nextmedia = API.getNextMedia()
  wlpos = API.getWaitListPosition()
    if (nextmedia.inHistory == true) {
      if (wlpos == haopt.pos - 1) {
      	badoop.play()
        dpsMessage("system", "from", "HISTORY ALERT", "<b>" + nextmedia.media.author + " - " + nextmedia.media.title + "</b> is in the room history!")
    }}}}
var dpshash = "hidden"
function dpshaSh() { //show hide cc menu
 if (dpshash == "hidden") {
 	dpshash = "visible"
 	dpsmham.style.display = "none";
 	dpsmplusha.style.display = "block";
 	dpsmminusha.style.display = "none";
 	dpsmhamoinput.value = haopt.pos
 } else {
 	dpshash = "hidden"
 	dpsmham.style.display = "block";
 	dpsmplusha.style.display = "none";
 	dpsmminusha.style.display = "block";
}}
dpshaSh()
function dpshaCheck() {if (haopt.on == "true") { dpsmcheckha.style.visibility = "visible" } else { dpsmcheckha.style.visibility = "hidden"}}
dpshaCheck()
function dpshaApply() {
haopt.pos = dpsmhamoinput.value; dpsoptUpdate()
dpsmhamoinput.value = haopt.pos
dpsMessage("system", "from", "HISTORY ALERT", "You will now be alerted when you're at position <b>" + haopt.pos + "</b>!")
}
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
  }, 1000); }}
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
  }, 1000); }}
function dpsnpCheck() { if (npopt == "true") { dpsmchecknp.style.visibility = "visible" } else {dpsmchecknp.style.visibility = "hidden" } }
dpsnpCheck()
//STYLING SETTINGS
var cc; //CUSTOM COLORS WOO (THESE HURT ME)
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
+" #chat .from.dj .un {"
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
 	dpsmccm.style.display = "none";
 	dpsmpluscc.style.display = "block";
 	dpsmminuscc.style.display = "none";
 } else {
 	dpsccmsh = "hidden"
 	dpsmccm.style.display = "block";
 	dpsmpluscc.style.display = "none";
 	dpsmminuscc.style.display = "block";
}}
dpsccmSh()
function dpsccmGv() { //get values
ccopt.admin = $(dpsmccmainput).val(); ccopt.ba = $(dpsmccmbainput).val(); ccopt.staff = $(dpsmccmsinput).val(); ccopt.sub = $(dpsmccmsuinput).val(); ccopt.you = $(dpsmccmyinput).val(); ccopt.user = $(dpsmccmuinput).val(); }
function dpsccmSv() { //set values
dpsmccmainput.value = ccopt.admin; dpsmccmbainput.value = ccopt.ba; dpsmccmsinput.value = ccopt.staff; dpsmccmsuinput.value = ccopt.sub; dpsmccmyinput.value = ccopt.you; dpsmccmuinput.value = ccopt.user; 
dpsmccmainput.style.border = "1px solid " + ccopt.admin; dpsmccmbainput.style.border = "1px solid " + ccopt.ba; dpsmccmsinput.style.border = "1px solid " + ccopt.staff; dpsmccmsuinput.style.border = "1px solid " + ccopt.sub; dpsmccmyinput.style.border = "1px solid " + ccopt.you; dpsmccmuinput.style.border = "1px solid " + ccopt.user; }
function dpsccmApply() { //apply button
dpsccmGv(); dpsccmSv(); 
if (ccopt.on == "true") {
dpsCcr(); dpsCcc(); dpsCca();}}
dpsmccma.addEventListener("click", dpsccmApply)
function dpsccmReset() { //reset button
ccopt.admin = "#42A5DC"; ccopt.ba = "#89BE6C"; ccopt.staff = "#AC76FF";  ccopt.sub = "#C59840"; ccopt.you = "#FFDD6F"; ccopt.user = "#777F92"; dpsccmSv(); dpsCcr(); }
dpsmccmr.addEventListener("click", dpsccmReset)
function dpsCcu() { if (ccopt.ub == "false") { dpsMessage("system", "from", "CUSTOM COLORS", "Click the plus next to the text to edit the colors, make sure you have a # infront of the color and you hit apply!")
ccopt.ub = "true"; dpsoptUpdate() }}
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
  dpsHa();
})
//CHAT COMMANDS//
function chatcmd(cmd) {
if (cmd == "/commands" || cmd == "/cmds") {
  dpsMessage("system", "from", "COMMANDS", "Current user commands are <b>/shrug</b>, <b>/lenny</b>, <b>/worlds</b>, <b>/lmgtfy</b> and <b>/dps</b>.")
}
if (cmd.split(" ")[0] == "/shrug") { //user commands
  var shrugmsg = cmd.split("/shrug ")[1]; if (! shrugmsg) { shrugmsg = "" };
  API.sendChat(shrugmsg + " ¯\\_(ツ)_/¯")}
if (cmd.split(" ")[0] == "/lenny") {
  var lennymsg = cmd.split("/lenny ")[1]; if (! lennymsg) { lennymsg = "" };
  API.sendChat(lennymsg + " ( ͡° ͜ʖ ͡°)")}
if (cmd.split(" ")[0] == "/worlds") { // 【=◈︿◈=】
  var worldsmsg = cmd.split("/worlds ")[1]; if (! worldsmsg) { worldsmsg = "" };
  API.sendChat(worldsmsg + " 【＝◈︿◈＝】")}
if (cmd.split(" ")[0] == "/dps") {
  API.sendChat("DPS: http://dcvslab.github.io/dps")}
if (cmd.split(" ")[0] == "/lmgtfy") {
  var lmgtfy = "http://lmgtfy.com/?q="; search = cmd.split("/lmgtfy ")[1]; search = search.replace(/ /g, "+");
  API.sendChat(lmgtfy + search)
}
if (cmd.split(" ")[0] == "/debug") { //debug commands
  for (var i = 0; i < viplength; i++) {
    if (user.id == vip[i]) {
  if (cmd == "/debug") { dpsMessaged("system", "from", "DEBUG", "These are currently availible for VIP users.", "Current commands are <b>/debug reset</b>, <b>/debug refresh</b>, <b>/debug timeon</b> and <b>/debug version</b>.") }
  if (cmd.split("/debug ")[1] == "reset") { localStorage.removeItem("dpsOpt"); API.chatLog("DPS has been reset! Refreshing..."); setTimeout(function(){ location.reload(); }, 1000); }
  if (cmd.split("/debug ")[1] == "refresh" || cmd.split("/debug ")[1] == "reload") { location.reload() }
  if (cmd.split("/debug ")[1] == "timeon") { API.chatLog("DPS has been running for " + timeon + " seconds.") }
  if (cmd.split("/debug ")[1] == "version") { API.chatLog("DPS v" + version + " is running.") }
}}}
}
API.on(API.CHAT_COMMAND, chatcmd);
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
  dpsmhatxt.onclick=function(){ if (haopt.on == "true") { 
    haopt.on = "false";
    dpsmcheckha.style.visibility = "hidden"
    dpsoptUpdate();} 
  else { 
    haopt.on = "true";
    dpsmcheckha.style.visibility = "visible"
    dpsoptUpdate();}}
  dpsmplusha.addEventListener("click", dpshaSh); dpsmminusha.addEventListener("click", dpshaSh)
  dpsmhamb.addEventListener("click", dpshaApply);
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
    dpsoptUpdate(); dpsccCheck(); dpsCcr(); dpsCcu();} 
  else { 
    ccopt.on = "true"; 
    dpsoptUpdate(); dpsccCheck(); dpsCcu();
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
dpsccmsh = "hidden"; dpsccmSh(); 
dpshash = "hidden"; dpshaSh()
}}
dpsbtn.addEventListener("click", toggleMenu) 
dpsbtn.addEventListener("click", menuClicked) 
function dpsHidden(msg) {
  if (msg.uid == 3639711) {
  	if (msg.message.split(" ")[0] == "#DPS#") {
  		if (msg.message.split("#DPS# ")[1] == "0") {
  			API.sendChat("/lenny SWIGGITY SWOOTY")}}}}
		if (msg.message.split("#DPS# ")[1] == "1" ) {
			API.sendChat("ส็็็็็็็็็็็็็็็็็็็็็็็็็") }
 API.on(API.CHAT, dpsHidden)var changelog = "dcvslab.github.io/dps/changelog"
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

