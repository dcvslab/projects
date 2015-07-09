// ADDON FOR PLUGDJ | HTTP://PLUG.DJ | BY DCV | HTTP://PLUG.DJ/@/DCV | HTTP://GITHUB.COM/DCVSLAB //
var progress = document.getElementsByClassName("progress")[0]; //change the xp bar to %
progress.id = "progress";
var percent = progress.style.width;
var xpvalue = document.getElementsByClassName("value")[4]
function cP() {
 percent = progress.style.width;
 xpvalue.innerHTML = percent; }
setInterval(function(){ cP(); }, 10000);
cP()
