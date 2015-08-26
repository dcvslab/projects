//RAFFLE.JS//DCV//PLUG.DJ/@/DCV
raffletimesec = "45"
var raffletime = 45000
var raffleusers = ["ru"]
var raffleon = "off"
function raffleDraw() {
  if (raffleon == "on") {
    if (raffleusers.length > 1) {
      var winnum = Math.floor(Math.random() * (raffleusers.length - 2 + 1)) + 2;
      API.sendChat("@" + raffleusers.slice(winnum - 1, winnum)[0].split("/-/")[1] + " has won!")
      window.raffleusers.splice(winnum - 1, 1); raffleon = "off";
    } else { API.sendChat("/me No one joined the raffle!"); raffleon = "off" }
}}
function raffleChat(chat) {
  var staffl = API.getStaff().length;
  for (var i = 0; i < staffl; i++) {
    if (chat.uid == API.getStaff()[i]);
    if (API.getStaff()[i].role <= 3 || chat.uid == API.getUser().id) {
      if (chat.message.toLowerCase() == "!start") { //START THE BOT
        if (raffleon == "off") {
        window.raffleusers = ["ru"]
        API.sendChat("/me Raffle has been started by @" + chat.un + " for " + raffletimesec + " seconds! Type !join to enter it!"); setTimeout(function(){ raffleDraw();  }, raffletime);
        raffleon = "on"
      }}
      if (chat.message.toLowerCase().split(" ")[0] == "!time") { //SET THE TIME\
        if (! chat.message.split(" ")[1]) { } else {
        API.sendChat("/me Raffle length has been set to " + chat.message.split(" ")[1] + " seconds by @" + chat.un)
        raffletimesec = chat.message.split(" ")[1]
        raffletimes = chat.message.split(" ")[1].toString() + "000";
        eval('raffletime ='+raffletimes);
      }}
      if (chat.message.toLowerCase() == "!end") { //FORCE END RAFFLE
        if (raffleon == "on") {
        raffleon = "off"; raffleusers = ["ru"]
        API.sendChat("/me Raffle was force ended by @" + chat.un)
      }}
      if (chat.message.toLowerCase() == "!draw") {
        API.sendChat("/me Raffle is now being drawn early by @" + chat.un);
        raffleDraw();
      }
      if (chat.message.toLowerCase() == "!redraw") {
        if (raffleon == "on") {
          API.sendChat("/me @" + chat.un + " , you can't redraw while the raffle is still going! Type !draw to draw early.")
        } else {
          API.sendChat("/me Raffle is being redrawn by @" + chat.un); raffleon = "on"
          raffleDraw();
        }}
      
      if (chat.message.toLowerCase() == "!clear") {
        API.sendChat("/me Raffle was ended and list was cleared!")
        raffleon = "off";
        window.raffleusers = ["ru"]
      }
    }} //END MANAGER + COMMANDS | START EVERYONE COMMANDS
      if (chat.message.toLowerCase() == "!join") { //JOIN THE RAFFLE
        if (raffleon == "on") {
          if (window.raffleusers.indexOf(chat.uid + "/-/" + chat.un) == -1)
          window.raffleusers.push(chat.uid + "/-/" + chat.un)
        }}
      if (chat.message.toLowerCase() == "!leave") { //LEAVE THE RAFFLE
        if (raffleon = "on") {
          var spot = window.raffleusers.indexOf(chat.uid + "/-/" + chat.un)
          window.raffleusers.splice(spot, 1)
      }}
}
API.on(API.CHAT, raffleChat)
