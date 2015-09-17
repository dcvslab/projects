//EXPORTS PLAYLISTS INTO A TEXT DOCUMENT WITH ALL LINKS//
var timestamp = ""; var dpsid = "exportplaylists"
var _scroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28;
function addChat(cmtype, nameclass, nametext, messagetext) { //from dps//
  if (! nameclass) { nameclass="" };
  if (! nametext) { nametext=""};
  if (! messagetext) { messagetext="" };
$("#chat-messages").append("<div data-cid='" + dpsid + "' class='dpsmsg cm " + cmtype + "' stlye='padding-left: 5px'><div class='msg cid-" + dpsid + "' style='padding-left: 10px'><div class ='" + nameclass + "'><span class='un'>" + nametext + "</span><span style='display: inline;' class='timestamp'>" + timestamp + "</span></div><div class='text cid-" + dpsid + "'>" + messagetext +"</div></div></div>");
if (_scroll) { $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight; }} 
  function createPET(text) {
    var playlistmedia = new Blob([text], {type: 'text/plain'});
    var playlistmediaurl = URL.createObjectURL(playlistmedia)
    addChat("system", "from", "EXPORT PLAYLIST", "<a href=" + playlistmediaurl + ">Exported Playlist</a>")
  };
addChat("system", "from", "EXPORT PLAYLIST", "Type <b>/export</b> to start exporting your current playlist.")
function eP() { //export playlist
  $.getJSON("https://plug.dj/_/playlists", function(playlists) { 
    var rawplaylist = playlists.data; 
    var rawplaylistl = rawplaylist.length; 
      for (var a = 0; a < rawplaylistl; a++) {
        if (rawplaylist[a].active == true) {
          addChat("system", "from","EXPORT PLAYLIST", "Starting to export from playlist ' " + rawplaylist[a].name + " '.");
          window.selectedplaylistid = rawplaylist[a].id; window.selectedplaylistname = rawplaylist[a].name;
          eTD()
}}})}
function eTD() {//export to doc
  $.getJSON("https://plug.dj/_/playlists/" + window.selectedplaylistid + "/media", function(media) {
    var blobtext = [window.selectedplaylistname];
      var rawmedia = media.data;
      var rawmedial = rawmedia.length;
        for (var b = 0; b < rawmedial; b++) {
          if (rawmedia[b].format == 1) { //youtube
            blobtext.push("http://youtu.be/" + rawmedia[b].cid.toString());
          } else { //soundcloud
            $.getJSON('https://api.soundcloud.com/tracks/' + rawmedia[b].cid.toString() + '.json?client_id=bb52b4a0c199ecc98cd5d4e4ddf2ee14', function(rawsoundcloud) {
              var strrsc = JSON.stringify(rawsoundcloud); var sclink = strrsc.split("permalink_url")[2].split(",")[0].replace(/"/g, "").replace(/:/g, "").replace(/http/g,"http:"); blobtext.push(sclink)})}
          }
      setTimeout(function(){
      var playlistexport = blobtext.toString().replace(/,/g, "\r\n");
      createPET(playlistexport);  }, 3000);
  })}
function onCommand(cmd) {
  if (cmd == "/export") { eP() }
} API.on(API.CHAT_COMMAND, onCommand)
