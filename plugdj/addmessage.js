//DCV'S ADD MESSAGE SCRIPT// COMING SOON: ADD ICON THINGS
var user = API.getUser()
var damsn = 1
var damseid = "DAMS-" + damsn
var damsid = "DAMS-" + user.id + "-" + damsn
var _scroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28; //BORROWED WITH PERMISSION FROM BETATESTER/IGOR ADDCHAT SCRIPT
console.log ("FUNCTION ORDER: imgtype, badgebox, nameclass, nametext, nametextvar,  messagetext, messagetextvar")
function damsMessage(imgtype, badgebox, nameclass, nametext, nametextvar,  messagetext, messagetextvar) { 
  //IMGTYPE CAN BE 1 OF 2 THINGS: " class" | THE SPACE IS IMPORTANT | will let you use plugdj icons and badges, while doing "mg src" and putting a link in the badgebox var will let you put an image
  //BADGEBOX CAN BE DONE USING PLUGDJ ICONS( http://pastebin.com/QD9FAE4d has a list of all icons), PLUGDJ BADGES (https://rcs.radiant.dj/badges has almost all badges, just put bdg bdg- infront ) OR THE LINK TO YOUR IMAGE IF YOU ARE DOING "mg src"
  //NAMECLASS can be done using a plug.dj class (from you, from(will do grey user), from staff, from ambassador, from admin) or your own class. To add has sub, do from has-sub "insert rest"
    //IMPORTANT //when using pdj ones, YOU NEED THE FROM IN FRONT
 //NAMETEXT is the text where the username goes, you can use vars, one is installed 
 //MESSAGETEXT is the text where the chat goes, you can use vars, one is installed
    //IMPORTANT //when using vars, don't put quotes around them when inputting the function ex: "messagetext", messagetextvar
$("#chat-messages").append("<div data-cid='" + damsid + "' class='cm message'><div class='badge-box'><i" + imgtype + "='" + badgebox + "'></i></div><div class='msg cid-" + damsid + "'><div class='" + nameclass + "'><span class='un'>" + nametext + nametextvar +  "</span></div><div class='text cid-" + damsid + "'>" + messagetext + messagetextvar + "</div></div></div>");
var one = 1
damsn = damsn + one
damseid = "DAMS-" + damsn
damsid = "DAMS-" + user.id + "-" + damsn }
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; } //BORROWED WITH PERMISSION FROM BETATESTER/IGOR ADDCHAT SCRIPT
if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  } //BORROWED WITH PERMISSION FROM BETATESTER/IGOR ADDCHAT SCRIPT
