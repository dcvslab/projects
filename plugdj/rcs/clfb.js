//DCV'S RCS ADDON #2 | CHANGE LEGACY FOOTER BUTTON | COPYRIGHT DCV/DCVSLAB 2015
var ftropt = document.getElementById("toggle-oldFooter") //check if it's clicked//
var ftroptc = ftropt.classList[2];
if(typeof ftroptc === 'undefined'){ ftroptc = "notselected" }
var copta = document.createElement("div"); //create the first option//
copta.className = "rsrow";
copta.id = "dcvopt";
copta.style.marginTop = "6px"
copta.style.height = "25px"
var coptaspan = document.createElement("span"); //create the text
var coptaspantext = document.createTextNode("Avatar Button")
coptaspan.style.position = "absolute";
coptaspan.style.left = "35px";
coptaspan.style.marginLeft = "10px";
coptaspan.style.color = "#808691";
coptaspan.appendChild(coptaspantext)
copta.appendChild(coptaspan);
var rcsmenus = document.getElementById("rcs-menu-s")
rcsmenus.appendChild(copta);
var coptb = document.createElement("div"); //create the second option button//
coptb.className = "rsrow";
coptb.id = "dcvopt";
coptb.style.marginTop = "6px"
coptb.style.height = "25px"
var coptbspan = document.createElement("span"); //create the text
var coptbspantext = document.createTextNode("Badge Button")
coptbspan.style.position = "absolute";
coptbspan.style.left = "35px";
coptbspan.style.marginLeft = "10px";
coptbspan.style.color = "#808691";
coptbspan.appendChild(coptbspantext)
coptb.appendChild(coptbspan);
var rcsmenus = document.getElementById("rcs-menu-s")
rcsmenus.appendChild(coptb);
var coptsh = document.createElement("div"); //create the third option button//
coptsh.className = "rsrow";
coptsh.id = "dcvopt";
coptsh.style.marginTop = "6px"
coptsh.style.height = "25px"
var coptshspan = document.createElement("span"); //create the text
var coptshspantext = document.createTextNode("Shop Button")
coptshspan.style.position = "absolute";
coptshspan.style.left = "35px";
coptshspan.style.marginLeft = "10px";
coptshspan.style.color = "#808691";
coptshspan.appendChild(coptshspantext)
coptsh.appendChild(coptshspan);
var rcsmenus = document.getElementById("rcs-menu-s")
rcsmenus.appendChild(coptsh);
var coptp = document.createElement("div"); //create the fourth option button//
coptp.className = "rsrow";
coptp.id = "dcvopt";
coptp.style.marginTop = "6px"
coptp.style.height = "25px"
var coptpspan = document.createElement("span"); //create the text
var coptpspantext = document.createTextNode("Profile Button")
coptpspan.style.position = "absolute";
coptpspan.style.left = "35px";
coptpspan.style.marginLeft = "10px";
coptpspan.style.color = "#808691";
coptpspan.appendChild(coptpspantext)
coptp.appendChild(coptpspan);
var rcsmenus = document.getElementById("rcs-menu-s")
rcsmenus.appendChild(coptp);
var coptse = document.createElement("div"); //create the fifth option button//
coptse.className = "rsrow";
coptse.id = "dcvopt";
coptse.style.marginTop = "6px"
coptse.style.height = "25px"
var coptsespan = document.createElement("span"); //create the text
var coptsespantext = document.createTextNode("Settings Button")
coptsespan.style.position = "absolute";
coptsespan.style.left = "35px";
coptsespan.style.marginLeft = "10px";
coptsespan.style.color = "#808691";
coptsespan.appendChild(coptsespantext)
coptse.appendChild(coptsespan);
var rcsmenus = document.getElementById("rcs-menu-s")
rcsmenus.appendChild(coptse);

    var ibtn = document.getElementsByClassName("inventory button")[0]; //define the buttons
    var bbtn = document.getElementsByClassName("badge button")[0];
    var stbtn = document.getElementsByClassName("store button")[0];
      if(typeof stbtn === 'undefined'){
        stbtn = document.getElementsByClassName("store button notify")[0] };
    var pbtn = document.getElementsByClassName("profile button")[0];
      if(typeof pbtn === 'undefined'){
        pbtn = document.getElementsByClassName("store button notify")[0]; }
    var sebtn = document.getElementsByClassName("settings button")[0];
function dcvTest() { //check if the footer is checked
  if (ftroptc == "notselected") { 
    copta.style.display = "none"
    coptb.style.display = "none"
    coptsh.style.display = "none"
    coptp.style.display = "none"
    coptse.style.display = "none"
    ibtn.style.width = "20% !important";//change the width of all the buttons
    bbtn.style.width = "20% !important";
    stbtn.style.width = "20% !important";
    pbtn.style.width = "20% !important";
    sebtn.style.width = "20% !important";
    ibtn.style.display = "block"; //set their display
    bbtn.style.display = "block";
    stbtn.style.display = "block";
    pbtn.style.display = "block";
    sebtn.style.display = "block";
  } else { 
    copta.style.display = "block"
    coptb.style.display = "block"
    coptsh.style.display = "block"
    coptp.style.display = "block"
    coptse.style.display = "block"
    ibtn.style.width = "54px !important";//change the width of all the buttons
    bbtn.style.width = "54px !important";
    stbtn.style.width = "54px !important";
    pbtn.style.width = "54px !important";
    sebtn.style.width = "54px !important";
    ibtn.style.display = "none"; //set their display
    bbtn.style.display = "none";
    stbtn.style.display = "none";
    pbtn.style.display = "none";
    sebtn.style.display = "block";
  }
}
rcsbtn = document.getElementById("rcs-appright-button")
rcsbtn.addEventListener("click", dcvTest);
function anotherdcvTest() {
  if (ftroptc == "notselected") { 
    copta.style.display = "none"
    coptb.style.display = "none"
    coptsh.style.display = "none"
    coptp.style.display = "none"
    coptse.style.display = "none"
  } else {
    copta.style.display = "block"
    coptb.style.display = "block"
    coptsh.style.display = "block"
    coptp.style.display = "block"
    coptse.style.display = "block"
  }
}
ftropt.addEventListener("click", anotherdcvTest);
