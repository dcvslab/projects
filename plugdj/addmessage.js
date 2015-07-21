//DCV'S ADD MESSAGE SCRIPT//
var user = API.getUser()
var damsn = 1
var damsopt = 4
var damseid = "DAMS-" + damsn
function damS(badgebox, nameclass, nametext, messagetext) {
  if (! badgebox) { badgebox = "icon icon-plug-dj"; damsopt = damsopt - 1}
  if (! nameclass) { nameclass = "from staff"; damsopt = damsopt - 1 }
  if (! nametext) { nametext = "DAMS"; damsopt = damsopt - 1 }
  if (! messagetext) { messagetext = "DAMS MESSAGE TEXT"; damsopt = damsopt - 1 }
user = API.getUser()
var damsid = "DAMS-" + user.id + "-" + damsn + "-" + damsopt
$("#chat-messages").append("<div data-cid='" + damsid + "' class='cm message' id=DAMS-" + damsn + "><div class='badge-box clickable'><i class='" + badgebox + "'></i></div><div class='msg cid-" + damsid + "'><div class='" + nameclass + "'><span class='un clickable'>" + nametext + "</span><span style='display: inline;' class='timestamp'></span></div><div class='text cid-" + damsid + "'>" + messagetext + "</div></div></div>");
var one = 1
damsnn = damsn + one
damsn = damsnn
dpsopt = 4 }
