var media = API.getMedia();
var currentdj = API.getDJ().username;

API.on(API.ADVANCE, function(data) {
        var media = API.getMedia();
        var currentdj = API.getDJ().username;
        setTimeout(function(){ dcvSong(); }, 3000);
});
 

document.addEventListener('DOMContentLoaded', function () {
  if (Notification.permission !== "granted")
    Notification.requestPermission();
});

//start up notification//
function dcvStart() {
  if (!Notification) {
    alert('Desktop notifications are not availible. Are you using the right script?'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification("DCV's Notifications", {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: ("Successfully started version0.1, click here for change logs."),
    });

   notification.onclick = function(){
    window.open("http://dcvslab.github.io/changelog");
                }
        };
}

function dcvSong() {
  if (!Notification) {
    alert('Desktop notifications are not availible. Are you using the right script?'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
        var media = API.getMedia();
        var currentdj = API.getDJ().username;
    var notification = new Notification(currentdj + " is playing:", {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: (media.author+ "-" +media.title),
    });

   notification.onclick = function(){
    window.focus();
    this.cancel();
};

  }

}
