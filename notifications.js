//THIS IS A FIREFOX EXTENSION, THE CHROME EXTENSION IS IN THE MAKING//
//COPYRIGHT DCVSLAB 2015, DO NOT EDIT WITHOUT GIVING ME CREDIT//

//variables//
var dummy = "useless"
var media = API.getMedia();
var currentdj = API.getDJ().username;
var userid = API.getUser().id;
var username = API.getUser().username;
var songHistoryPresent = "undefined"
var songHistorytf = API.getNextMedia().inHistory
var poscurrent = API.getWaitList();
var poscurrentid = poscurrent[0].id

//function start//
window.onload = dcvStart();

//variables are here to update them//
API.on(API.ADVANCE, function(data) {
        var media = API.getMedia();
        var currentdj = API.getDJ().username;
        var poscurrent = API.getWaitList();
        var poscurrentid = poscurrent[0].id;
        var songHistorytf = API.getNextMedia().inHistory;
        setTimeout(function(){ dcvSong(); }, 3000);
        setTimeout(function(){ dcvPos(); }, 7000);
       
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

//start up notification | dcvStart() //
function dcvStart() {
  if (!Notification) {
    alert('Desktop notifications are not availible. Are you using the right script?'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
    var notification = new Notification("DCV's Notifications", {
      icon: 'http://i.imgur.com/joWEdip.png',
      body: ("Hey " + username +", you've started version 0.2, click here for change logs."),
    });

   notification.onclick = function(){
    window.open("http://dcvslab.github.io/changelog");
    alert('Changelog has opened in a new tab')
                }
        };
}

//song advance notifiaction | dcvSong() //
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
      icon: 'http://i.imgur.com/joWEdip.png',
      body: (media.author + " - " + media.title),
    });

   notification.onclick = function(){
    window.focus();
};

  }

}

//you are posistion 1 | dcvPos()//
function dcvPos() {
  if (!Notification) {
    alert('Desktop notifications are not availible. Are you using the right script?'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
        var poscurrent = API.getWaitList();
        var poscurrentid = poscurrent[0].id
        var userid = API.getUser().id
        if (posscurrentid = userid) {
        if (songHistorytf = true) {
                     var songHistoryPresent = "is in the room history, change it quick!";
              } else {
                      //if it is false//
                     var songHistoryPresent = "is not in the room history.";
        }
    var notification = new Notification("You're up next!", {
      icon: 'http://i.imgur.com/joWEdip.png',
      body: ("Your next song " + songHistoryPresent),
    });

   notification.onclick = function(){
    window.focus();
};
} else {
        var dummy = "you found my secret"
}
  }
}
