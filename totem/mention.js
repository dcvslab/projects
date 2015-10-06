//refresh entire server.onmessage//
server.onmessage = function(event) {
        event_data = JSON.parse(event.data);
        data = event_data.data;
        console.log(event_data);

        switch(event_data.event) {
            case "room_data": // called to initialize room
                if(data == false) {
                    window.location = "http://totem.fm";
                    return false;
                }
                room_name = data.display_name;
                $("#room-description").html(data.description);
                $(".room-title").html(data.display_name);
                $("#room-users").html(data.user_counter);
                $("#room-queue").html(0);
                if(data.song) {
                    started = data.song.started_at;
                    now = Math.floor(Date.now() / 1000);
                    difference = now - started;

                    loadVideoById(data.song.url_fragment, difference);

                    setSongInfo(data.song.name, data.song.artist);
                    setScore(data.score.positive, data.score.negative);
                    $("#current-dj-wrapper").removeAttr("hidden");
                    $("#current-dj").html(data.current_dj);

                    last_title = data.song.name;
                    last_artist = data.song.artist;
                    last_url_fragment = data.song.url_fragment;
                    started_at = Math.floor(Date.now() / 1000);

                    nothing_playing = false;
                } else {
                    $("#main_content").attr("hidden", "hidden");
                    $("#no_video").removeAttr("hidden");
                    nothing_playing = true;
                }
            break;
            case "score_update":
                setScore(data.positive, data.negative);
                break;
            case "count_update":
                $("#room-users").html(data.user_count);
                $("#room-queue").html(data.queue_size);
            break;
            case "notification":
                var n = noty({
                    text: data.text,
                    theme: 'relax',
                    dismissQueue: true,
                    type: data.type,
                    layout: "topRight",
                    animation: {
                        open: {height: 'toggle'},
                        close: {height: 'toggle'}
                    },
                    timeout: 5000
                });
            break;
            case "song_change":
                updateMyQueue();
                songHistory.push({
                    image_url: data.song.picture_url,
                    title: data.song.name,
                    author: data.song.artist,
                    url_fragment: data.song.url_fragment
                });
                updateSidebar();
                if(mode == 0) {
                    loadVideoById(data.song.url_fragment, 0);

                    setSongInfo(data.song.name, data.song.artist);

                    var n = noty({
                        text: data.dj + " is playing " + data.song.artist + " - " + data.song.name,
                        theme: 'relax',
                        dismissQueue: true,
                        type: "information",
                        layout: "topRight",
                        animation: {
                            open: {height: 'toggle'},
                            close: {height: 'toggle'}
                        },
                        timeout: 10000
                    });

                    $("#current-dj-wrapper").removeAttr("hidden");
                    $("#current-dj").html(data.dj);
                    $("#main_content").removeAttr("hidden");
                    $("#no_video").attr("hidden", "hidden");
                    last_title = data.song.name;
                    last_artist = data.song.artist;
                    last_url_fragment = data.song.url_fragment;
                    started_at = Math.floor(Date.now() / 1000);
                    nothing_playing = false;
                    setScore(0, 0);
                }

                advanceBackgroundImage();
            break;
            case "chat":
                console.log(data);
                if (data.message.indexOf("@" + display_name) > -1) { 
                var audio = new Audio('https://rawgit.com/dcvslab/dcvslab.github.io/master/badoop.mp3'); audio.play();
                var chatmessage = data.message.replace("@" + display_name, "<b>@" + display_name + "</b>")
                $("#chat-text").append('<span class="chat-message-wrapper chat-tag"><span class="chat-message-sender">' + data.sender + '</span><span class="chat-message-text">' + chatmessage + '</span></span>');
                $("#chat-text").scrollTop($("#chat-text")[0].scrollHeight);
                                    var n = noty({
                        text: data.sender + ": " + chatmessage,
                        theme: 'relax',
                        dismissQueue: true,
                        type: "information",
                        layout: "topRight",
                        animation: {
                            open: {height: 'toggle'},
                            close: {height: 'toggle'}
                        },
                        timeout: 5000
                    });
                } else {
                $("#chat-text").append('<span class="chat-message-wrapper"><span class="chat-message-sender">' + data.sender + '</span><span class="chat-message-text">' + data.message + '</span></span>');
                $("#chat-text").scrollTop($("#chat-text")[0].scrollHeight);     
                }
        }
    };
