//define variables
var woots = API.getScore().positive;
var mehs = API.getScore().negative;
var grabs = API.getScore().grabs;

//this gets the score
function getScore() {
woots = API.getScore().positive;
mehs = API.getScore().negative;
grabs = API.getScore().grabs;
console.log("SCORE_LOGGED")

//this updates the score every 10 seconds
setInterval(function(){ getScore(); }, 10000);

//this sends the score
function sendScore() {
API.sendChat("Woots: " + woots + " | Mehs: " + mehs + " | Grabs: " + grabs);
}
//this sends the score on the song advance for the previous song
API.on(API.ADVANCE, function(data) {
        setTimeout(function(){ sendScore(); }, 1000);
});
