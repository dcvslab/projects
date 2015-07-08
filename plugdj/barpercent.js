// ADDON FOR PLUGDJ | HTTP://PLUG.DJ | BY DCV | HTTP://PLUG.DJ/@/DCV | HTTP://GITHUB.COM/DCVSLAB //
document.querySelector('div.progress').id = 'progress';
var progress = document.getElementById("progress");
var percent = progress.style.width;
function cP() { document.getElementsByClassName("value")[4].innerHTML = percent; percent = progress.style.width;}
setInterval(function(){ cP(); }, 10000);
