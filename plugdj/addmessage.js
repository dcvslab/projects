//DCV'S ADD MESSAGE SCRIPT// COMING SOON: TIMESTAMPS? V1.2
var user = API.getUser()
var damsn = 1
var damseid = "DAMS-" + damsn
var damsid = "DAMS-" + user.id + "-" + damsn
var time = "DAMS"
var _scroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28; //BORROWED WITH PERMISSION FROM BETATESTER/IGOR ADDCHAT SCRIPT
console.log ("FUNCTION ORDER: imgtype, badgebox, nameclass, nametext, nametextvar,messagetext, messagetextvar, icon1type, icon1data, icon2type, icon2data, icon3type, icon3data")
function damsMessage(imgtype, badgebox, nameclass, nametext, nametextvar, messagetext, messagetextvar, icon1type, icon1data, icon2type, icon2data, icon3type, icon3data) { 
  //IMGTYPE CAN BE 1 OF 2 THINGS: " class" | THE SPACE IS IMPORTANT | will let you use plugdj icons and badges, while doing "mg src" and putting a link in the badgebox var will let you put an image
  if (! imgtype) { imgtype="" }
  //BADGEBOX CAN BE DONE USING PLUGDJ ICONS( http://pastebin.com/QD9FAE4d has a list of all icons), PLUGDJ BADGES (https://rcs.radiant.dj/badges has almost all badges, just put bdg bdg- infront ) OR THE LINK TO YOUR IMAGE IF YOU ARE DOING "mg src"
  if (! badgebox) { badgebox="" }
  //NAMECLASS can be done using a plug.dj class (from you, from(will do grey user), from staff, from ambassador, from admin) or your own class. To add has sub, do from has-sub "insert rest"
    //IMPORTANT //when using pdj ones, YOU NEED THE FROM IN FRONT
  if (! nameclass) { nameclass="" }
 //NAMETEXT is the text where the username goes, you can use vars, one is installed 
  if (! nametext) { nametext=""}
 //NAMETEXTVAR is how you can use some variables, more info below
  if (! nametextvar) { nametextvar="" }
 //MESSAGETEXT is the text where the chat goes, you can use vars, one is installed
  if (! messagetext) { messagetext="" }
 //MESSAGETEXTVAR is how you can some some varibales, more info \/
  if (! messagetextvar) { messagetextvar=""}
    //IMPORTANT //when using vars, don't put quotes around them when inputting the function ex: "messagetext", messagetextvar
 //ICONS
  //ICON TYPE: EITHER " class" or "mg src", the first for using plugdj icons and the second for using your own images
  if (! icon1type) { icon1type="" }
  if (! icon2type) { icon2type="" }
  if (! icon3type) { icon3type="" }
  //ICON DATA: where you put the icon/link you want for the image
  if (! icon1data) { icon1data="" }
  if (! icon2data) { icon2data="" }
  if (! icon3data) { icon3data="" }
    //IMPORTANT // if you don't want to use icons, you don't have to! that's why they are at the end so you don't even have to bother with them
$("#chat-messages").append("<div data-cid='" + damsid + "' class='cm message'><div class='badge-box'><i" + imgtype + "='" + badgebox + "'></i></div><div class='msg cid-" + damsid + "'><div class='" + nameclass + "'><i" + icon1type + "='" + icon1data + "' style='margin-right: 4px; width: 16px; height: 16px; float: left;'></i><i" + icon2type + "='" + icon2data + "' style='margin-right: 4px; width: 16px; height: 16px; float: left;'></i><i" + icon3type + "='" + icon3data + "' style='margin-right: 4px; width: 16px; height: 16px; float: left;'></i><span class='un'>" + nametext + nametextvar +  "</span><span style='display: inline;' class='timestamp'>" + time + "</span></div><div class='text cid-" + damsid + "'>" + messagetext + messagetextvar + "</div></div></div>");
var imgtype="";var badgebox="";var nameclass="";var nametext="";var nametextvar;var messagetext="";var messagetextvar="";var icon1type="";var icon1data="";var icon2type=""; icon2data="";var icon3type="";var icon3data="";
damsn = damsn + 1
damseid = "DAMS-" + damsn
damsid = "DAMS-" + user.id + "-" + damsn }
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; } //BORROWED WITH PERMISSION FROM BETATESTER/IGOR ADDCHAT SCRIPT
if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  } //BORROWED WITH PERMISSION FROM BETATESTER/IGOR ADDCHAT SCRIPT
