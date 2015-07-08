$(document).bind('keydown',function(e){
    if(e.keyCode == 74) {
        API.djJoin();
    }
});
//this doesn't work to well, if you hit j anywhere then it just joins you into the waitlist
