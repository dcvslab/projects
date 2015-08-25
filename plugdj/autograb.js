ag = "on";
function autoGrab() {
    if (ag == "on") {
    document.getElementById("grab").click()
    var playlists = document.getElementsByClassName("grab")[0].children[1].children[0].children
     var playlistlength = playlists.length;
    for (var i = 0; i < playlistlength; i++) {
        if (playlists[i].children.length == 2) { if (playlists[i].children[1].innerHTML == "Create Playlist") { } else { $(playlists[i]).mousedown() }};
}}} 
function agCmd(cmd) { if (cmd.toLowerCase() == "/ag") { if (ag == "off") { ag = "on"; API.chatLog("AutoGrab is on!") } else { ag = "off"; API.chatLog("AutoGrab is off!") }}}
API.on(API.ADVANCE, autoGrab); API.on(API.CHAT_COMMAND, agCmd)
