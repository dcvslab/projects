//ADDON FOR PLUGDJ | HTTP://PLUG.DJ //
document.querySelector('div.bar').id = 'bar';
var bar = document.getElementById("bar")
document.querySelector('div.progress').id = 'progress';
var progress = document.getElementById("progress");
var percent = progress.style.width;
var value = document.getElementsByClassName("value")[4];
var inner = value.innerHTML;

function cP {
  inner = percent
}
 setInterval(function(){ alert("cP"); }, 10000);
