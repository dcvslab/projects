var listwoot = document.getElementById("woot-rs-list")
var childrenwoot = listwoot.children;
for (var i = 0; i < childrenwoot.length; i++) {
  var wootclick = childrenwoot[i];
  wootlist.addEventListener("click", function(){
    API.sendChat("/whois " + this.id);
});
}
