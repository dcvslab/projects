var media = API.getMedia();

API.on(API.ADVANCE, function(data) {
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
    var notification = new Notification('Now Playing', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: (media.author+ "-" +media.title),
    });

   notification.onclick = function(){
    window.focus();
    this.cancel();
};

  }

}
