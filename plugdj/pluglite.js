//this is something kinda pointless, but :P
//remove chat/friends buttons and the chat itself//
document.getElementById("chat-button").style.display = "none";
document.getElementById("friends-button").style.display = "none";
document.getElementById("chat").style.display = "none"
//define buttons//
var ubtn = document.getElementById("users-button");
var wlbtn = document.getElementById("waitlist-button");
//define background1
var bg1 = document.getElementsByClassName("app-right")[0]
//change ubtn properties//
ubtn.style.left = "0px";
ubtn.style.width = "50%";
//chnge wlbtn properties//
wlbtn.style.left = "50%";
wlbtn.style.width = "50%";
//change bg1 properties//
bg1.style.backgroundColor = "rgba(10,10,10,.2)"
//click on another option//
ubtn.click();
