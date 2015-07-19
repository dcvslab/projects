//currently broken, will fix sometime//
var ccolor = "light"
var cmsgs;
var cmsgsl;//most recent msg
var crmsg;
var crmsgid;
var cmsgsl2; //2nd most recent msg
var crmsg2;
var crmsg2id;
API.on(API.CHAT, function(data){
  if (ccolor == "light") {
    ccolor = "dark"
    cmsgs = document.getElementsByClassName("cm")
    cmsgsl = cmsgs.length - "1"
    crmsg = cmsgs[cmsgsl]
    var crmsgid = crmsg.getAttribute("data-cid").split("-")[0]
    cmsgsl2 = cmsgs.length - "2" 
    crmsg2 = cmsgs[cmsgsl2]
    var crmsglid = crmsg2.getAttribute("data-cid").split("-")[0]
    if (crmsgid != crmsglid) { 
    crmsg.style.backgroundColor = "#111317"
      console.log(ccolor)
    }
  } else {
    ccolor = "light"
    cmsgs = document.getElementsByClassName("cm")
    cmsgsl = cmsgs.length - "1"
    crmsg = cmsgs[cmsgsl]
    var crmsgid = crmsg.getAttribute("data-cid").split("-")[0]
    cmsgsl2 = cmsgs.length - "2" 
    crmsg2 = cmsgs[cmsgsl2]
    var crmsg2id = crmsg2.getAttribute("data-cid").split("-")[0]
    if (crmsgid != crmsglid) { 
    crmsg.style.backgroundColor = "#0A0A0A"
    console.log(ccolor)
    }
}})
