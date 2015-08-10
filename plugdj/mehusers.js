var dj = API.getDJ()
var amehuser;
function chatcommand(command) {
if (command.contains("/amul")) {
  var getamul = localStorage.getItem("mehuser");
  API.chatLog("Current List: " + getamul);
} else {
if (command.contains("/amu")) {
if (command.split("/amu ")[1].contains(",")) { 
mehuser = command.split("/amu ")[1].split(",")
localStorage.setItem("mehuser", mehuser)
API.chatLog("Users " + mehuser + " were added to your list!")
}
else {
var mehuser = command.split("/amu ")[1];
localStorage.setItem("mehuser", mehuser)
API.chatLog("User " + mehuser + " was added to your list!")
}}}}
function amehUser() {
dj = API.getDJ()
var amuc = amehuser.children;
for (var i = 0; i < amuc.length; i++) {
  if (dj.contains(amuc[i])) {
    document.getElementById("meh").click() }}}
API.on(API.ADVANCE, function(data) { amehUser(); })
API.on(API.CHAT_COMMAND, chatcommand);
