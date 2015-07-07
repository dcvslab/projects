var dj = API.getDJ().id
var user = API.getUser().id
var volz = API.setVolume(0)
var volm = API.setVolume(100)

window.onload = volz

function dcvMagic {
dj = API.getDJ().id
if (dj == user) {

API.on(API.ADVANCE, function(data) {
        sendScore();
});
