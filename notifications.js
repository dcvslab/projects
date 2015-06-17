var media = API.getMedia();

API.on(API.ADVANCE, function(data) {
        var currentdj = data.dj.username
        var media = API.getMedia();
        setTimeout(function(){ dcvSong(); }, 3000);
});
 

document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});


function dcvSong() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var media = API.getMedia()
    var notification = new Notification(currentdj + "is playing", {
      icon: 'http://i.imgur.com/joWEdip.png',
      body: (media.author+" - "+media.title),
    });

   notification.onclick = function(){
    window.focus();
    this.cancel();
};

  }

}
