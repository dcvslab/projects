var randommsgs = [ "%%USER%% do you want to donate and get nothing in reward except using this site? Donate here instead: http://plug.dj/subscribe",
"%%USER%% , you should spend your money here: http://plug.dj/donate | http://plug.dj/subscribe",
"%%USER%% , thinking about donating? Cool, because we take every kind of currency, even rupees! http://plug.dj/donate | http://plug.dj/subscribe",
"%%USER%% , this is an ad, if you don't want anymore go and donate: http://plug.dj/donate | http://plug.dj/subscribe",
"%%USER%% , go donate! http://plug.dj/donate | http://plug.dj/subscribe"
]
function randomTag(user) { 
  var usersl = API.getUsers().length - 1 
  var randomnum = Math.random() * (usersl - 0) + 0; var randommsgnum = Math.random() * (5 - 1) + 1;
  var randomnums = randomnum.toString().split(".")[0]; randommsgsnums = randommsgnum.toString().split(".")[0]
  if (user == "RANDOM") { var userc = "@" + API.getUsers()[randomnums].username; } else { var userc = user } 
  var msg = randommsgs[randommsgsnums].replace("%%USER%%", userc)
  API.sendChat(msg + "")
}
function onCommand(cmd) { if (cmd == "/send") { randomTag() }}; API.on(API.CHAT_COMMAND, onCommand);
  
