var cmdlogbtn = document.createElement("div"); cmdlogbtn.className = "item cmdlog clickable";
var cmdlogbtni = document.createElement("i"); cmdlogbtni.className = "icon icon-chat-system";
var cmdlogbtntxt = document.createElement("span"); cmdlogbtntxt.innerHTML = "Command Log";
var list = document.getElementsByClassName("list")[2]
$(cmdlogbtn).append(cmdlogbtntxt); $(cmdlogbtn).prepend(cmdlogbtni); $(list).prepend(cmdlogbtn);
var cmdlogm = document.createElement("div"); cmdlogm.style.width = document.getElementById("dashboard").style.width; cmdlogm.style.height = "inherit"; cmdlogm.style.backgroundColor = "#111317"; cmdlogm.style.right = "345px"; cmdlogm.style.position = "absolute"; cmdlogm.style.display = "none";
var appright = document.getElementsByClassName("app-right")[0]; appright.style.zIndex = "20"
var clld = document.createElement("div"); var cll = document.createElement("span"); cll.innerHTML = "<b>COMMAND LOG</b>"; var cllt  = "<b>COMMAND LOG</b>"
clld.appendChild(cll); cmdlogm.appendChild(clld)
$(appright).append(cmdlogm)
var clmt = "false"
function showClm() { 
  if (clmt == "false") {
  clmt = "true"
  cmdlogm.style.display = "block" }
  else {
  clmt = "false"
  cmdlogm.style.display = "none" }}
cmdlogbtn.addEventListener("click", showClm)
function onChat(chat) {
  if (chat.message.split("")[0] == "!") {
    cllt = cllt + "<br><b>" + chat.un + "</b> ( <font color='#dedede'>" + chat.uid + "</font> ) | " + chat.message
    cll.innerHTML = cllt
    clld.appendChild(cll)
  }
}
