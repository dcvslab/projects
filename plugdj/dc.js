var runtime = 0
setInterval(function(){ runtime = runtime + 1; }, 1000);
var wl = API.getWaitList();
var wldc = ["dcarray"]
setInterval(function(){ wl = API.getWaitList(); }, 5000);
function uL(ul) {
  var wll = wl.length;
for (var i = 0; i < wll; i++) {
    if (wl[i].id == ul.id) {
      var wlp = i + 1
      wldc.push(ul.username + "." + ul.id + "." + wlp + "." + runtime)
    }}}
API.on(API.USER_LEAVE, uL);
function chatmsg(msg) {
  if (msg.message == "!dc" || msg.message == "!DC") {
  var inum = 0
  var wldcl = wldc.length;
  for (var i = 0; i < wldcl; i++) {
   if (wldc[i].split(".")[1] == msg.uid) {
     API.sendChat("/me @" + msg.un + " was at position " + wldc[i].split(".")[2]);
     var uid = msg.uid.toString()
     var upos = wldc[i].split(".")[2]
     API.moderateAddDJ(uid);
     setTimeout(function(){ API.moderateMoveDJ(uid, upos) }, 500);
     wldc.splice(i, 1);
  } else {
    inum = inum + 1
    if (inum == wldc.length) {
      API.sendChat("/me @" + msg.un + " didn't disconnect.")
}}}}}
API.on(API.CHAT, chatmsg);
function pushWldc() {
  wldcp = { "list": wldc, "runtime": runtime } 
  localStorage.setItem('dtebot', JSON.stringify(wldcp));
}
API.on(API.USER_LEAVE, pushWldc);
setInterval(function(){ pushWldc() }, 5000);
function loadWldc() {
  wldclo = localStorage.getItem("dtebot")
  lwldco = JSON.parse(wldclo);
  wldc = lwldco.list
  runtime = lwldco.runtime
}
loadWldc()
