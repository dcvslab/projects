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
      wldc.push(ul.id + "." + wlp + "." + runtime)
    }}}
API.on(API.USER_LEAVE, uL);
function uJ(uj) {
  var wldcl = wldc.length;
  for (var i = 0; i < wldcl; i++) {
   if (wldc[i].split(".")[0] == uj.id) {
    if (wldc[i].split(".")[2] <= wldc[i].split(".")[2] + 60) { 
    API.chatLog("Moving @" + uj.username + " to position " + wldc[i].split(" ")[1])
    wldc.splice(i,1); }
    else {
    API.chatLog("@" + uj.username + " took to long to return to the room! Spots are only saved for 30 minutes!")
    wldc.splice(i,1);
}}}}
API.on(API.USER_JOIN, uJ);
function clearWldc() {
  var wldcl = wldc.length;
  for (var i = 0; i < wldcl; i++) {
    if (wldc[i].split(".")[2] < runtime - 60) {
    API.chatLog("Removing " + wldc[i].split(".")[0] + " from wldc for taking to long.");
    wldc.splice(i,1);
}}}
setInterval(function(){ clearWldc(); }, 900000);
