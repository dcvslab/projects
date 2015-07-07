//by http://plug.dj/@/dcv with help from chip //
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
  wootclick.addEventListener("click", function(){
    API.sendChat("/whois " + this.id);
});
}
//grab list//
for (var i = 0; i < childrengrab.length; i++) {
  var wootgrab = childrengrab[i];
  wootgrab.addEventListener("click", function(){
    API.sendChat("/whois " + this.id);
});
}
//meh list//
for (var i = 0; i < childrenmeh.length; i++) {
  var wootmeh = childrenmeh[i];
  wootmeh.addEventListener("click", function(){
    API.sendChat("/whois " + this.id);
});
}
//stuff to make it work on dj advance //
function crapFix() {
var timeleft = API.getTimeRemaining();
if timeleft == 5 {
  setTimeout(function(){ hooDini(); }, 10000);
}}
setInterval(function(){ crapFix(); }, 1000);

