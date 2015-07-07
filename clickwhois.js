//by http://plug.dj/@/dcv with help from chip //

//woot list//
var listwoot = document.getElementById("woot-rs-list")
var childrenwoot = listwoot.children;
for (var i = 0; i < childrenwoot.length; i++) {
  var wootclick = childrenwoot[i];
  wootclick.addEventListener("click", function(){
    API.sendChat("/whois " + this.id);
});
}
//grab list//
var listgrab = document.getElementById("grab-rs-list")
var childrengrab = listgrab.children;
for (var i = 0; i < childrengrab.length; i++) {
  var wootgrab = childrengrab[i];
  wootgrab.addEventListener("click", function(){
    API.sendChat("/whois " + this.id);
});
}
//meh list//
var listmeh = document.getElementById("meh-rs-list")
var childrenmeh = listmeh.children;
for (var i = 0; i < childrenmeh.length; i++) {
  var wootmeh = childrenmeh[i];
  wootmeh.addEventListener("click", function(){
    API.sendChat("/whois " + this.id);
});
}
