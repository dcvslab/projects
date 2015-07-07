//variables
var dj = API.getDJ().id
var user = API.getUser().id

//onload
window.onload = API.setVolume(0)

//magic function
function dcvMagic {
dj = API.getDJ().id

if (dj == user) {
       API.setVolume(100)
} else {
       API.setVolume(0)   
}}

//execute func on advanvce
API.on(API.ADVANCE, function(data) {
        dcvMagic();
});
