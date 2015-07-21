//DCV'S ADD MESSAGE SCRIPT//
var user = API.getUser()
var damsn = 1
var damsopt = 5
var damseid = "DAMS-" + damsn
function damsMessage(imgtype, badgebox, nameclass, nametext, messagetext) {
  //IMGTYPE CAN BE 1 OF 2 THINGS: " class" | THE SPACE IS IMPORTANT | will let you use plugdj icons and badges, while doing "mg src" and putting a link in the badgebox var will let you put an image
  if (! imgtype) { imgtype = " class"; damsopt = damsopt - 1}
  if (! badgebox) { badgebox = "icon icon-plug-dj"; damsopt = damsopt - 1}
  if (! nameclass) { nameclass = "from staff"; damsopt = damsopt - 1 }
  if (! nametext) { nametext = "DAMS"; damsopt = damsopt - 1 }
  if (! messagetext) { messagetext = "DAMS MESSAGE TEXT"; damsopt = damsopt - 1 }
user = API.getUser()
var damsid = "DAMS-" + user.id + "-" + damsn + "-" + damsopt
    var _scroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28;
$("#chat-messages").append("<div data-cid='" + damsid + "' class='cm message' id=DAMS-" + damsn + "><div class='badge-box clickable'><i" + imgtype + "='" + badgebox + "'></i></div><div class='msg cid-" + damsid + "'><div class='" + nameclass + "'><span class='un clickable'>" + nametext + "</span></div><div class='text cid-" + damsid + "'>" + messagetext + "</div></div></div>");
var one = 1
damsnn = damsn + one
damsn = damsnn
dpsopt = 5 }
//BORROWED FROM BETATESTER/IGOR ADDCHAT SCRIPT


    // If it should scroll, then scroll
    if (_scroll) {
        $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight;
    }

    // If there's more than 512 messages, remove the last
    if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  }

// http://tgchan.org/kusaba/icons/src/awesome.png
