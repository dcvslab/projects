//DCV'S RCS ADDON #2 | CHANGE LEGACY FOOTER BUTTON | COPYRIGHT DCV/DCVSLAB 2015
var ftropt = document.getElementById("toggle-oldFooter") //check if it's clicked//
var ftroptc = ftropt.classList[2];
if(typeof ftroptc === 'undefined'){ ftroptc = "notselected" }
var copt = document.createElement("div"); //create the change option button//
copt.className = "rsrow";
copt.id = "dcvopt";
copt.style.marginTop = "6px"
copt.style.height = "25px"
var coptspan = document.createElement("span"); //create the text
var coptspantext = document.createTextNode("Change Footer Button | DCV")
coptspan.style.position = "absolute";
coptspan.style.left = "35px";
coptspan.style.marginLeft = "10px";
coptspan.style.color = "#808691";
coptspan.appendChild(coptspantext)
copt.appendChild(coptspan);
var rcsmenus = document.getElementById("rcs-menu-s")
rcsmenus.appendChild(copt);
function dcvTest() { 
  if (ftroptc == "notselected") { 
    copt.style.display = "none" 
  } else { 
    copt.style.display = "block" 
  }
}
function dcV() {
  if (ftroptc == "notselected") {
    ftroptc = "selected";
    copt.style.display = "block";
  } else {
    ftroptc = "notselected";
    copt.style.display = "none"
  }
}
rcsbtn = document.getElementById("rcs-appright-button")
ftropt.addEventListener("click", dcV)
rcsbtn.addEventListener("click", dcvTest);
