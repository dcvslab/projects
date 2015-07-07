//by http://plug.dj/@/dcv with help from chip //
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
