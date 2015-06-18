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
    window.focus();
    this.cancel();
                }
        };
}
//song advance notifiaction//

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
        setTimeout(function(){ dcvClose() }, 6000);
    var notification = new Notification(currentdj + " is playing:", {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: (media.author+ "-" +media.title),
    });

   notification.onclick = function(){
    window.focus();
    this.cancel();
    document.dispatchEvent(event);
};

  }
//the following is needed for chrome, i could use their notification api, but that blocks the chat//

//close//
function dcvClose() {
       document.dispatchEvent(event);
}
//close event listener//
document.addEventListener("close", function(e) {
  console.log(e.detail); 
});

//close event create//
var event = new CustomEvent("close", { "detail": "close event (needed for chrome)" });

}
