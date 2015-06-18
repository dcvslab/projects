//THIS IS A FIREFOX EXTENSION, THE CHROME EXTENSION IS IN THE MAKING//
//COPYRIGHT DCVSLAB 2015, DO NOT EDIT WITHOUT GIVING ME CREDIT//

//variables//
var media = API.getMedia();
var currentdj = API.getDJ().username;
var userid = API.getUser().id;
var currentpos = API.getWaitListPosition(userid)
var songHistorytf = API.getNextMedia().inHistory

//function running//
window.onload = dcvStart();

//variables are here to update them//
API.on(API.ADVANCE, function(data) {
        var media = API.getMedia();
        var currentdj = API.getDJ().username;
        var currentpos = API.getWaitListPosition(userid)
        var songHistorytf = API.getNextMedia().inHistory
        setTimeout(function(){ dcvSong(); }, 3000);
        setTimeout(function(){ dcvPos(); }, 6000);
       
        //songHistorytf to songHistoryPresent by making the true/false into better statements//
              if (songHistorytf = true) {
                     var songHistoryPresent = "is in the room history, change it quick!";
              } else {
                      //if it is false//
                     var songHistoryPresent = "is not in the room history.";
              }
});
 
//permission gainer//
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
      body: ("Successfully started version 0.2, click here for change logs."),
    });

   notification.onclick = function(){
    window.open("http://dcvslab.github.io/changelog");
    alert('Changelog has opened in a new tab')
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
        var currentdj = API.getDJ().username;
    var notification = new Notification(currentdj + " is playing:", {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: (media.author + " - " +mea.title),
    });

   notification.onclick = function(){
    window.focus();
};

  }

}

//you are posistion 1//
if (currentpos = 0) {
function dcvPos() {
  if (!Notification) {
    alert('Desktop notifications are not availible. Are you using the right script?'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
        var userid = API.getUser().id
    var notification = new Notification("You're up next!", {
      icon: 'http://cdn.sstatic.net/stackexchange/img/logos/so/so-icon.png',
      body: ("Your next song is" + songHistoryPresent),
    });

   notification.onclick = function(){
    window.focus();
};

  }

}
} else {
       console.log(currentpos) 
}
