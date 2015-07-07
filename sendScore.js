//define your variables//
var woots = API.getScore().positive
var mehs = API.getScore().negative
var grabs = API.getScore().grabs
var timeleft = API.getTimeRemaining()

//make a function to get the time//
function getTime() {
var timeleft = API.getTimeRemaining()
}

//check the time every second//
setInterval(function(){ getTime(); }, 1000);

//what to do if it gets to a certain amount of seconds left (I'm using 5 seconds)
function sendScore() {
//tell it to do this when it reaches that second amount//
if (timeleft == 5) {
//redefine variables to get the current score//
var woots = API.getScore().positive
var mehs = API.getScore().negative
var grabs = API.getScore().grabs
console.log(woots + " woots | "mehs + " mehs | "grabs + " grabs")
//remember, you need to put spaces because the variables don't have them :P//

//run the function every second as well, so it can test if timeleft == 5
setInterval(function(){ sendScore()); }, 1000);
