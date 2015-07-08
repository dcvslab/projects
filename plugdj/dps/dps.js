//DCV'S PLUGDJ SCRIPT//
//SETTING UP THE BUTTON//
document.getElementById("facebook-menu").remove(); //remove fb
document.getElementById("twitter-menu").remove() //remove twitter
document.getElementById("footer-user").style.width = "414px";
document.getElementsByClassName("inventory button")[0].style.width = "16.6666666%" //change the width of all the buttons
document.getElementsByClassName("badge button")[0].style.width = "16.6666666%"
document.getElementsByClassName("store button notify")[0].style.width = "16.6666666%"
document.getElementsByClassName("profile button notify")[0].style.width = "16.6666666%"
document.getElementsByClassName("settings button")[0].style.width = "16.6666666%"
document.getElementsByClassName("inventory button")[0].style.left = "16.6666666%" //move all the buttons over
document.getElementsByClassName("badge button")[0].style.left = "16.6666666%"
document.getElementsByClassName("store button notify")[0].style.left = "16.6666666%"
document.getElementsByClassName("profile button notify")[0].style.left = "16.6666666%"
document.getElementsByClassName("settings button")[0].style.left = "16.6666666%"
var dcvbtn = document.createElement("div"); //create dcv button
dcvbtn.id = "dcv-button"
dcvbtn.className = "dcv button"
dcvbtn.style.right = "83.3333333%" //a bit of styling
dcvbtn.style.width = "16.66666666%" 
dcvbtn.style.zIndex ="1000"
document.body.appendChild(dcvbtn); //put it in the document
var dcvlogo = document.createElement("IMG"); //create dcv logo
    dcvlogo.setAttribute("src", "http://i.imgur.com/1CuQDdE.png");
    dcvlogo.setAttribute("width", "69");
    dcvlogo.setAttribute("height", "53");
    dcvlogo.setAttribute("alt", "dcvlogo");
document.getElementById("dcv-button").appendChild(dcvlogo);
document.getElementsByClassName("buttons")[0].appendChild(dcvbtn);
dcvbtn.addEventListener("click", function(){
    alert("Soon™"),
})
