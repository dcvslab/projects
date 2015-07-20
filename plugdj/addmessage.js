//DCV'S ADD MESSAGE SCRIPT//
<div data-cid="dams-undefined" class="cm message"> 
  <div class="badge-box clickable"><i class="bdg bdg-dragon-g02 g"></i></div>
  <div class="msg cid-dams-undefined"><div class="from you"> 
    <span class="un clickable">DAMS</span>
    <span style="display: inline;" class="timestamp"></span></div>
      <div class="cid-dams-undefined">DAMS IS HERE</div>
  </div>
</div>
var user = API.getUser()
var damsn = 1
var damseid = "DAMS-" + damsn
function damS() {
user = API.getUser()
var damsid = "DAMS-" + user.id + "-" + damsn
$("head").append("<div data-cid='" + damsid + "' class='cm message' id=DAMS-" + damsn + ">");
damseid = "DAMS-" + damsn
$(damseid).append("hi")
var one = 1
damsnn = damsn + one
damsn = damsnn
}
