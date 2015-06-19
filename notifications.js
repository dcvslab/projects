//THIS IS A FIREFOX EXTENSION, THE CHROME EXTENSION IS IN THE MAKING//
//COPYRIGHT DCVSLAB 2015, DO NOT EDIT WITHOUT GIVING ME, DCVSLAB, CREDIT//

//variables//
var dummy = "useless"
var userid = API.getUser().id;
var username = API.getUser().username;
var waitlist = API.getWaitList();
var media = API.getMedia();
if (waitlist.length == 0) {
         if (media == undefined) {
                  var currentdj = "No DJ"
         } else 
         { var currentdj = API.getDJ();
         }
} else {
         var currentdj = API.getDJ().username;
}
if (waitlist.length == 0) {
         var waitlistone = 0
} else {
var waitlistone = waitlist[0].id;
}
var score = API.getScore();
var woots = score.positive;
var mehs = score.negative;
var grabs = score.grabs;
var timeleft = API.getTimeRemaining();
var grabgrammar = "Grab";
var mehgrammar = "Meh";
var wootgrammar = "Woot";

//time left | dcvTimeleft() //
function dcvTimeleft() {
         var timeleft = API.getTimeRemaining();
         console.log(timeleft);
         if (timeleft == 10) {
                   if (!Notification) {
    alert('Desktop notifications are not availible. Are you using the right script?'); 
    return;
  }

  if (Notification.permission !== "granted")
    Notification.requestPermission();
  else {
        var score = API.getScore();
        var woots = score.positive;
        var mehs = score.negative;
        var grabs = score.grabs;  
         if (grabs == 1) {
                  var grabgrammar = "Grab"
         } else { var grabgrammar = "Grabs"
         };
         if (woots == 1) {
                  var wootgrammar = "Woot"
         } else { var wootgrammar = "Woots"
         };
         if (mehs == 1) {
                  var mehgrammar = "Meh"
         } else { var mehgrammar = "Mehs"
         };
    var notification = new Notification(media.author + " - " + media.title), {
      icon: 'http://i.imgur.com/joWEdip.png',
      body: (woots + " " + wootgrammar + " | " + mehs + " " + mehgrammar " | " grabs + " " + grabgrammar),};

   notification.onclick = function(){
    window.focus();
}
}
} else {
        var dummy = dummy
};
}
//function start//
window.onload = dcvStart();
window.onload = setInterval(function(){ dcvTimeleft(); }, 1000);
//variables are here to update them//
API.on(API.ADVANCE, function(data) {
        var media = API.getMedia();
        var currentdj = API.getDJ().username;
        var waitlist = API.getWaitList();
        var waitlistone = waitlist[0].id
        setTimeout(function(){ dcvSong(); }, 3000);
        setTimeout(function(){ dcvPos(); }, 7000);
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
var userid = API.getUser().id;
var waitlist = API.getWaitList();
var waitlistone = waitlist[0].id

if (waitlistone == userid) {
  if (Notification.permission !== "granted") {
    Notification.requestPermission(); }
  else {
        var media = API.getMedia();
        var currentdj = API.getDJ().username;
    var notification = new Notification("Booth Notification", {
      icon: 'http://i.imgur.com/joWEdip.png',
      body: ("You're up next, get ready to play!"),
    });

   notification.onclick = function(){
    window.focus();
}

  }

}};











