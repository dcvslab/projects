//omg this is confusing//
function addChat(_text, _class1, _class2) {
    // _text is the message you're sending
    // _class1 is the class for the div that contains the message block
    // _class2 is the class for the message you just sent

    // Come on, you understand this
    if (!_class1 || _class1 == "undefined") {
        _class1 = "";
    }

    if (!_class2 || _class2 == "undefined") {
        _class2 = "";
    }


    // _scroll is true if the user hasn't scrolled up chat, and therefore, chat should scroll when you append the message
    var _scroll = $("#chat-messages")[0].scrollTop > $("#chat-messages")[0].scrollHeight - $("#chat-messages").height() - 28;

    // Appends the message (_text) with the classes
    $("#chat-messages").append(
        "<div class='bcs-log " + _class1 + "'>"
            + "<div class='" + _class2 + "'>" + _text + "</div>"
        + "</div>");

    // If it should scroll, then scroll
    if (_scroll) {
        $("#chat-messages")[0].scrollTop = $("#chat-messages")[0].scrollHeight;
    }

    // If there's more than 512 messages, remove the last
    if ($("#chat-messages").children().length > 512) {  $("#chat-messages").children().first().remove();  }
}
