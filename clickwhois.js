//by http://plug.dj/@/dcv with help from chip //
function sendWhois() {
  API.sendChat("/whois " + this.id);
}
var listwoot = document.getElementById("woot-rs-list")
var childrenwoot = listwoot.children;
var listgrab = document.getElementById("grab-rs-list")
var childrengrab = listgrab.children;
var listmeh = document.getElementById("meh-rs-list")
var childrenmeh = listmeh.children;

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
