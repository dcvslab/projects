var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

player = false;
player_initialized = false;
player_is_visible = true;
last_image_url = "";
last_title = "";
last_room = "";
last_author = "";
ctime = 0;
duration = 60;
room = window.location.pathname.replace("/room/", "");
mode = 0;
nothing_playing = true;
my_vote = 0;

songHistory = [];
disconnect_timer = 3;

last_title = "";
last_artist = "";
last_url_fragment = "";
started_at = 0;
my_queue = [];
in_queue = false;

function onDisconnect() {

}

function togglePlayerVisibility() {
    if(player_is_visible) {
        $(".fa-eye").toggleClass("fa-eye-slash");
        $(".fa-eye").toggleClass("fa-eye");

        $('#player').animate({
            opacity: 0,
            height: '0px'
        }, 500, function() {
            $("#player").attr("hidden", "hidden");
        });
        player_is_visible = false;
        window.localStorage.setItem("hide_video", true);
    } else {
        $(".fa-eye-slash").toggleClass("fa-eye");
        $(".fa-eye-slash").toggleClass("fa-eye-slash");

        $("#player").removeAttr("hidden");
        $('#player').animate({
            opacity: 1,
            height: '390px'
        }, 500);
        player_is_visible = true;
        window.localStorage.setItem("hide_video", false);
    }
}

function zeroPad(num, places) {
    var zero = places - num.toString().length + 1;
    return Array(+(zero > 0 && zero)).join("0") + num;
}

function switchMode(new_mode) {
    mode = new_mode;
    if(new_mode == 1) {
        $("#in-room").attr("hidden", "hidden");
        $("#manual").removeAttr("hidden");
        $("#score_wrapper").attr("hidden", "hidden");
    } else {
        setSongInfo(last_title, last_artist);
        loadVideoById(last_url_fragment, Math.floor(Date.now() / 1000) - started_at);
        $("#manual").attr("hidden", "hidden");
        $("#queue-container").attr("hidden", "hidden");
        $("#score_wrapper").removeAttr("hidden");
        $("#in-room").removeAttr("hidden");
    }
}

function loadVideo(id, title, artist) {
    switchMode(1);
    setSongInfo(title, artist);

    loadVideoById(id, 0);
    $("#main_content").removeAttr("hidden");
    $("#no_video").attr("hidden", "hidden");

    advanceBackgroundImage();
}

function onPlayerReady(event) {
    if(window.localStorage.getItem("volume") != undefined) {
        player.setVolume(window.localStorage.getItem("volume"));
    } else {
        player.setVolume(50);
    }

    $("#volume-slider").on('input', function(e) {
        vol = $("#volume-slider").val();
        player.setVolume(vol);
        window.localStorage.setItem('volume', vol);
    });

    event.target.playVideo();
}

function onPlayerStateChange(event) {
    if(event.data == 2) {
        player.playVideo();
    }

    ctime = player.getCurrentTime();
    duration = player.getDuration();
    artist_display_selector = $(".artist_display");
    if(artist_display_selector.html() == "") {
        artist_display_selector.html(player.getVideoData().author);
        $("title").html($(".title_display").html() + " · " + player.getVideoData().author + " · Totem");
    }

    if(event.data == 0) {
        if((player.getCurrentTime() + 1) > player.getDuration()) {
            $("#no_video").removeAttr("hidden");
            $("#main_content").attr("hidden", "hidden");
            nothing_playing = true;
        }
    }

    updateMyQueue();
}

function addCurrentSongToQueue() {
    in_queue = true;
    $("#in-room").attr("hidden", "hidden");
    $("#manual").attr("hidden", "hidden");
    $("#queue-container").removeAttr("hidden");
    my_queue.push({
        id: player.getVideoData().video_id,
        title: player.getVideoData().title,
        artist: player.getVideoData().author
    });

    server.send(JSON.stringify({
        "event": "queue",
        "song": {
            url_fragment: player.getVideoData().video_id
        },
        "key": authkey
    }));

    updateMyQueue();
    switchMode(0);
    if(nothing_playing) {
        $(".queue-status").removeAttr("hidden");
    } else {
        $(".queue-status").attr("hidden", "hidden");
    }

    setSongInfo(last_title, last_artist);
    loadVideoById(last_url_fragment, Math.floor(Date.now() / 1000) - started_at);
}

if(window.localStorage.getItem("hide_video") == "true") togglePlayerVisibility();

$("#volume-slider").val(window.localStorage.getItem("volume"));

setInterval(function() {
    $("#time_elapsed > div").css("width", (player.getCurrentTime() / player.getDuration()) * 100 + '%');

    time_remaining = new Date((player.getDuration() - player.getCurrentTime()) * 1000);
    $("#time-remaining").html(time_remaining.getMinutes() + ":" + zeroPad(time_remaining.getSeconds(), 2));
}, 200);

youtube_ready = false;
authkey = false;
room_name = "";
function onYouTubeIframeAPIReady() {
    youtube_ready = true;
}

function loadVideoById(id, time) {
    $("#no_video").attr("hidden", "hidden");
    $("#main_content").removeAttr("hidden");
    if(!player_initialized) {
        player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: id,
            playerVars: {
                autoplay: 1,
                border: 0,
                cc_load_policy: 0,
                controls: 0,
                disablekb: 1,
                enablejsapi: 1,
                hd: 1,
                playsinline: 1,
                iv_load_policy: 3,
                modestbranding: 1,
                origin: "http://totem.fm",
                playerapiid: "player",
                rel: 0,
                showinfo: 0,
                showsearch: 0,
                start: time
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });

        player_initialized = true;
    } else {
        player.loadVideoById({'videoId': id, 'suggestedQuality': 'large'});
        player.seekTo(time);
    }
}

function setSongInfo(title, artist) {
    if(mode == 0) {
        $("title").html(title + " · " + artist + " · " + room_name + " · Totem");
    } else {
        $("title").html(title + " · " + artist + " · Totem");
    }
    $(".title_display").html(title);
    $(".artist_display").html(artist);
}

function setScore(positive, negative) {
    $("#score-positive").html(positive);
    $("#score-negative").html(negative);
}

function vote(type) {
    $(".activated").removeClass("activated");
    switch(type) {
        case -1:
            $(".score-negative-wrapper").addClass("activated");
        break;
        case 1:
            $(".score-positive-wrapper").addClass("activated");
        break;
    }
    server.send(JSON.stringify({
        event: "vote",
        key: authkey,
        vote: type
    }));
}

function finishInit() {
    server = new WebSocket('ws://totem.fm:10000/', 'echo-protocol');

    server.onopen = function() {
        server.send(JSON.stringify({
            event: "login",
            key: authkey,
            room: room
        }));
    };

    server.onclose = function() {
        $("#disconnected").removeAttr("hidden");
        $("#background_shader").css("z-index", "150");
        $("#background_shader").css("background", 'radial-gradient(transparent, black), rgba(0, 0, 0, 0.6) no-repeat 100% center fixed');
        setInterval(function() {
            disconnect_timer--;
            $("#disconnected-countdown").html(disconnect_timer);
            if(disconnect_timer == 0) {
                window.location.reload();
            }
        }, 1000);
    };

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
                $("#room-queue").html(data.queue_counter);
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
                noty({
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
                $(".activated").removeAttr("activated");
                $(".history-content").append('<li class="list-group-item playlist" onclick="loadVideo(\'' + data.song.url_fragment + '\', \'' + data.song.name.replace("'", "&quot;") + '\', \'' + data.song.artist.replace("'", "&quot;") + '\')"><img class="playlist-item-thumbnail" src="' + data.song.picture_url + '"><div class="playlist-item-metadata-container"><span class="playlist-item-title">' + data.song.name + '</span><span class="playlist-item-artist-container">by <span class="playlist-item-artist">' + data.song.artist.replace("'", "&quot;") + '</span></span></div></li>');
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
                chatmessage = data.message
                if(data.message.toLowerCase().indexOf("@" + display_name) > -1) {
                    var audio = new Audio('https://rawgit.com/dcvslab/dcvslab.github.io/master/badoop.mp3'); audio.play();
                    var chatmessage = data.message.replace("@" + display_name, "<b>@" + display_name + "</b>")
                    noty({
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
                }
                var senderclass = "";
                if(data.sender.toLowerCase().toString() == "dcv" || data.sender.toLowerCase().toString() == "williamtdr") {
                    var senderclass = senderclass + " chat-dev "
                }
                if(data.sender.toLowerCase() == display_name) {
                    var senderclass = senderclass + " chat-you "
                }
                    $("#chat-text").append('<span class="chat-message-wrapper"><span class="chat-message-sender' + senderclass + '">' + data.sender + '</span> <span class="chat-message-text">' + linkify(data.message, { callback: function( text, href ) { return href ? '<a target="_blank" href="' + href + '" title="' + href + '">' + text + '</a>' : text;}}) + '</span></span>');
                    $("#chat-text").scrollTop($("#chat-text")[0].scrollHeight);
                }
        }
    };

    sidebarInit();
}

initDelayTimer = setInterval(function() {
    if(youtube_ready && authkey) {
        finishInit();
        clearTimeout(initDelayTimer);
    }
}, 100);