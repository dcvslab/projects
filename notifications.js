var media = API.getMedia() 
setTimeout(function(){ API.getMedia(); }, 500);

document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});
API.on(API.ADVANCE, function(data) {
        setTimeout(function(){ notifyMe(); }, 3000);
});

function notifyMe() {
  if (!Notification) {
    alert('Desktop notifications not available in your browser. Try Chromium.'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification('Now Playing', {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: (media.author+ "-" +media.title),
    });

    notification.onclick = function () {
      alert("how u doin");      
    };

  }

}
