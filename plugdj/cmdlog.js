var cmdlogbtn = document.createElement("div"); cmdlogbtn.className = "item cmdlog clickable";
var cmdlogbtni = document.createElement("i"); cmdlogbtni.className = "icon icon-chat-system";
var cmdlogbtntxt = document.createElement("span"); cmdlogbtntxt.innerHTML = "Command Log";
var list = document.getElementsByClassName("list")[2]
$(cmdlogbtn).append(cmdlogbtntxt); $(cmdlogbtn).prepend(cmdlogbtni); $(list).prepend(cmdlogbtn);
var cmdlogm = document.createElement("div"); cmdlogm.style.width = document.getElementById("dashboard").style.width; cmdlogm.style.height = "inherit"; cmdlogm.style.backgroundColor = "#111317"; cmdlogm.style.right = "345px"  
var appright = document.getElementsByClassName("app-right")[0]
$(appright).append(cmdlogm)
function showClm() { cmdlogm.style.display = "block" }
cmdlogbtn.addEventListener("click", showClm)
