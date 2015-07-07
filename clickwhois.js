//by http://plug.dj/@/dcv | thanks to chip (pointing me in the right direction) and encadyma (for trying to help me with a bug I had already fixed myself XD)
function sendWhois() {
  API.sendChat("/whois " + this.id);
}
//define variables, cause was having trouble//
var listwoot = document.getElementById("woot-rs-list")
var childrenwoot = listwoot.children;
var listgrab = document.getElementById("grab-rs-list")
var childrengrab = listgrab.children;
var listmeh = document.getElementById("meh-rs-list")
var childrenmeh = listmeh.children;

//function is to activate, so i can activate when i want//
function hooDini() {
var listwoot = document.getElementById("woot-rs-list")
var childrenwoot = listwoot.children;
var listgrab = document.getElementById("grab-rs-list")
var childrengrab = listgrab.children;
var listmeh = document.getElementById("meh-rs-list")
var childrenmeh = listmeh.children;

//woot list//
for (var i = 0; i < childrenwoot.length; i++) {
  var wootclick = childrenwoot[i];
  wootclick.addEventListener("click", sendWhois)
}
//grab list//
for (var i = 0; i < childrengrab.length; i++) {
  var grabclick = childrengrab[i];
  grabclick.addEventListener("click", sendWhois)
}
//meh list//
for (var i = 0; i < childrenmeh.length; i++) {
  var mehclick = childrenmeh[i];
  mehclick.addEventListener("click", sendWhois)
}};
setInterval(function(){ hooDini(); }, 2000);
