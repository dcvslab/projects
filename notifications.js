//THIS IS A FIREFOX EXTENSION, THE CHROME EXTENSION IS IN THE MAKING//
//COPYRIGHT DCVSLAB 2015, DO NOT EDIT WITHOUT GIVING ME CREDIT//

//variables//
var dummy = "useless"
var media = API.getMedia();
var currentdj = "currentdj";
var currentdjid = "1234567";
var userid = API.getUser().id;
var username = API.getUser().username;
var songHistoryPresent = "undefined";
var songHistorytf = API.getNextMedia().inHistory;
var poscurrent = "50";
var poscurrentid = "7654321";
var pastdj = API.getHistory();
var pastdjid = pastdj[0].user.id;

//function start//
window.onload = dcvStart();
setInterval(function(){ dcvHistoryCheck(); }, 1000);

//hotfix//
function dcvHistoryCheck() {
       var songHistoryPresent = ""; var SongHistorytf = API.getNextMedia().inHistory;
                if (SongHistorytf == true) {
                        songHistoryPresent = "is in the room history, change it quick!";
                } else {
                  songHistoryPresent = "is not in the room history.";     
                }
        }
 
//variables are here to update them//
API.on(API.ADVANCE, function(data) {
        setTimeout(function(){ dcvSong(); }, 3000);
        var media = API.getMedia();
        var currentdj = API.getDJ().username;
        var currentdjid = API.getDJ().id;
        var poscurrent = API.getWaitList();
        var poscurrentid = poscurrent[0].id;
        var songHistorytf = API.getNextMedia().inHistory;
        var pastdj = API.getHistory();
        var pastdjid = pastdj[0].user.id;
        setTimeout(function(){ dcvSong(); }, 3000);
        setTimeout(function(){ dcvPos(); }, 7000);
       
        //songHistorytf to songHistoryPresent by making the true/false into better statements//
              if (songHistorytf == true) {
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
        var currentdjid = API.getDJ().id;
        var userid = API.getUser().id;
        var pastdj = API.getHistory();
        var pastdjid = pastdj[0].user.id;
       if (pastdjid = currentdjid) { 
     var notification = new Notification(currentdj + " is playing:", {
      icon: 'http://i.imgur.com/6iZyZ5u.png',
      body: (media.author + " - " + media.title),
    });
       } else {
    var notification = new Notification(currentdj + " is playing:", {
      icon: 'http://i.imgur.com/6iZyZ5u.png',
      body: (media.author + " - " + media.title),
    });
       }

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
        var poscurrentid = poscurrent[0].id;
        var userid = API.getUser().id;
        if (posscurrentid = userid) {
     setTimeout(function(){ dcvHistoryCheck(); }, 1);
    var notification = new Notification("You're up next!", {
      icon: 'http://i.imgur.com/joWEdip.png',
      body: ("Your next song " + songHistoryPresent),
    });

   notification.onclick = function(){
    window.focus();
};
} else {
        var dummy = "you found my secret";
}
  }
}
