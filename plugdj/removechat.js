//this is something kinda pointless, but :P

//remove chat//
var headerpanel = document.getElementById("header-panel-bar")
headerpanel.removeChild(headerpanel.childNodes[0]);

//define buttons//
var ubtn = document.getElementById("users-button");
var wlbtn = document.getElementById("waitlist-button");
var fbtn = document.getElementById("friends-button");
//define backgrounds
var bg1 = document.getElementsByClassName("app-right")
var bg2 = document.getElementsByClassName("friends has-requests") //bg2 is friends list//

//change ubtn properties//
ubtn.style.left = "0px";
ubtn.style.width = "33%";

//chnge wlbtn properties//
wlbtn.style.left = "34%";
wlbtn.style.width = "34%";

//change fbtn properties//
fbtn.style.left = "66%";
fbtn.style.width = "33%";

//change bg1 properties//
bg1.style.backgroundColor = "rgba(10,10,10,.2)"

//change b2 properties//
bg2.style.backgroundColor = "rgba(10,10,10,.2)"

//click on another option//
ubtn.click();
