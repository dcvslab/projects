//EXPORTS PLAYLISTS INTO A TEXT DOCUMENT WITH ALL LINKS//
var playlistexporttxt = null
  createPET = function (text) {
    var playlistmedia = new Blob([text], {type: 'text/plain'});
    if (playlistexporttxt !== null) {
      window.URL.revokeObjectURL(playlistexporttxt);
    }

    playlistexporttxt = window.URL.createObjectURL(playlistmedia);

    // returns a URL you can use as a href
    return playlistexporttxt;
  };
API.chatLog("Export Playlists (A DCV EXTENSION) Activated")
API.chatLog("Activate the playlist you want to export, then type /export")
function exportSinglePlaylist() {
  $.getJSON("https://plug.dj/_/playlists", function(playlists) { 
    var rawplaylist = playlists.data; console.log("work")
    var rawplaylistl = rawplaylist.length; console.log("work2")
      for (var a = 0; a < rawplaylistl; a++) {
        if (rawplaylist[a].active == true) {
          API.chatLog("Starting to export from playlist ' " + rawplaylist[a].name + " '.");
          window.mediaarry = [rawplaylist[a].name]
          window.selectedplaylistid = rawplaylist[a].id
      } }
      $.getJSON("https://plug.dj/_/playlists/" + window.selectedplaylistid + "/media", function(media){ 
        var mediainplaylist = media.data
        var mediainplaylistl = media.length
          for (var b = 0; b < mediainplaylistl; b++) {
            if (mediainplaylist[b].format == 1) { //youtube
              window.mediaarray.push("https://youtu.be/" + mediainplaylist.cid)
            } else {
              $.getJSON('https://api.soundcloud.com/tracks/183513050.json?client_id=bb52b4a0c199ecc98cd5d4e4ddf2ee14', function(data) {
                var pdata = JSON.stringify(data); var ppdata = pdata.split(","); var pppdata = ppdata[43].replace(/"/g, "").split(":")[2]; window.mediaarray.push("http" + pppdata)
              })
            }}
      })
  })
}
