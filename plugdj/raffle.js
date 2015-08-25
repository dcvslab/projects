//RAFFLE.JS//DCV//PLUG.DJ/@/DCV
var raffletime = 45000
var raffleusers = ["ru"]
var raffleclear = "no"
function raffleDraw() {
  API.sendChat("draw stuff 1sec")
}
function raffleChat(chat) {
  var staffl = API.getStaff().length;
  for (var i = 0; i < staffl; i++) {
    if (chat.uid == API.getStaff()[i]);
    if (API.getStaff()[i].role <= 3 || chat.uid == API.getUser().id) {
      if (chat.message.toLowerCase() == "!start") { //START THE BOT
        API.sendChat("/me Raffle has been started by @" + chat.un + " for "  ! Type !join to enter it!"); setTimeout(function(){ window.raffleon = "off"; raffleDraw() }, raffletime);
        window.raffleon = "on"
      }
      if (chat.message.toLowerCase().split(" ")[0] == "!time") { //SET THE TIME
        API.sendChat("/me Raffle length has been set to " + chat.message.split(" ")[1] + " seconds by @" + chat.un)
        window.raffletime = chat.message.split(" ")[1].toString() + "000";
        window.raffletime = eval('({' + window.raffletime + '})');
      }
      if (chat.message.toLowerCase() == "!end") { //FORCE END RAFFLE
        if (window.raffleon == "on") {
        window.raffleon = "off"; window.raffleusers = ["ru"]
        API.sendChat("/me Raffle was force ended by @" + chat.un)
      }}
      if (chat.message.toLowerCase() == "!draw") {
        window.raffleon = "off"
        API.sendChat("/me Raffle is now being drawn early by @" + chat.un);
        raffleDraw();
      }
      if (chat.message.toLowerCase() == "!redraw") {
        if (window.raffleon == "on") {
          API.sendChat("/me @" + chat.un + " , you can't redraw while the raffle is still going! Type !draw to draw early.")
        } else {
          API.sendChat("/me Raffle is being redrawn by @" + chat.un)
          raffleDraw();
        }}
      
      if (chat.message.toLowerCase() == "!clear") {
        if (raffleclear == "no") {
          API.sendChat("/me This will remove everyone off the current raffle list, are you sure you want that to happen @" + chat.un + " ? Please type !clear again to confirm.");
          raffleclear = "yes";
      } else {
          API.sendChat("/me Current raffle list has been cleared by @" + chat.un);
          raffleclear = "no";
          var raffleusers = ["ru"]
      }}
    }}
      if (chat.message.toLowerCase() == "!join") { //JOIN THE RAFFLE
        if (window.raffleon == "on") {
          if (window.raffleusers.indexOf(chat.uid + "/-/" + chat.un) == -1)
          window.raffleusers.push(chat.uid + "/-/" + chat.un)
        }}
      if (chat.message.toLowerCase() == "!leave") { //LEAVE THE RAFFLE
        if (window.raffleon = "on") {
          var spot = window.raffleusers.indexOf(chat.uid + "/-/" + chat.un)
          window.raffleusers.splice(spot, 1)
      }}
}
API.on(API.CHAT, raffleChat)
