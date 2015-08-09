//change the rcs song progress bar color
var rcsbar = document.getElementById("rcs-progress-container")
var rcsmbar = document.getElementsByClassName("bar")[0]
if (! localStorage.getItem("color")) {
localStorage.setItem("color", "#42A5DC")}
rcsmbar.style.backgroundColor = localStorage.getItem("color")
rcsbar.onclick=function(){
var color = prompt("Enter Color", "");
rcsmbar.style.backgroundColor = color
localStorage.setItem("color", color)
};
function rcsbarSc() {
rcsmbar.style.backgroundColor = localStorage.getItem("color") }
API.on(API.ADVANCE, function(data) { rcsbarSc(); })
rcsbarSc()
