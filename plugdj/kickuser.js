function kickCmd(msg) {
  if (msg.message.split("")[0] == "!") {
  if (msg.message.split(" ")[0] == "!kick") {
  var user = msg.message.split("!kick ")[1]
  var usersl = API.getUsers().length;
  for (var i = 0; i < usersl; i++) {
    if (user == users[i].username) {
      API.moderateBanUser(users[i].id, 1, API.BAN.HOUR)
      setTimeout(function(){ moderateUnbanUser(users[i].id) }, 1000);
}}}}}}  
API.on(API.CHAT, kickCmd);
