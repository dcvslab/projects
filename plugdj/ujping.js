var badoop = new Audio(); badoop.src = "https://cdn.plug.dj/_/static/sfx/badoop.801a12ca13864e90203193b2c83c019c03a447d1.mp3"; badoop.load();
function userJoin(uj) {
  d = new Date()
  API.chatLog(uj.username + " has joined at " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds())  
  badoop.play()
}
API.on(API.USER_JOIN, userJoin)

