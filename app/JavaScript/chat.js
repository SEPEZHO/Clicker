function chatBegin() {
    $('#chat').hide();
    $('#chatButtonBegin').click(() => {
        $("footer > section:not('#chat')").hide();
        $('#chat').show();
        $('.exit').click(() => {
            $('#chat').hide();
        })
    });

    var socket = new WebSocket('ws://localhost:8080/clicker/app/php/chat.php');
    socket.onopen = function() {
        messageInfo("Соединение установлено.");
    };
    socket.onclose = function(event) {
        messageInfo('Соединение закрыто');
    };
    socket.onmessage = function(event) {
        var data = JSON.parse(event.data);
        if (data.type == 'mess') {
            message(data.message, data.login, data.lvl, data.time);
        } else {
            messageInfo(data.type);
        }
    };
    socket.onerror = function(error) {
        messageInfo("Ошибка " + error.message);
    };



    $('#chatButtonSnd').click(() => {
        if (isLog) {
            var error = false;
            var chatTextSnd = $('#chatTextSnd').val();
            if (chatTextSnd == '') {
                error = true;
                $('#error_textChat').text('Введите сообщение');
            } else if (chatTextSnd.length >= 80) {
                error = true;
                $('#error_textChat').text('Сообщение превышает лимит в 80 знаков сейчас знаков-' + chatTextSnd.length);
            } else {
                $('#error_textChat').empty();
            }
            if (!error) {
                var chatTextSndObj = {
                    chat_user: login,
                    chat_lvl: lvl,
                    chat_message: chatTextSnd
                };
                $('#chatTextSnd').val('');
                socket.send(JSON.stringify(chatTextSndObj));
            }
        } else {
            cAlert('Вам следует войти или зарегестрироваться.')
        }
    })
    setInterval(() => {
        var chatTextSndObj = {
            chat_user: 'Bot',
            chat_lvl: 1,
            chat_message: 'Hello, im a chat messageBOT, im sending message every 5 sec.'
        };
        socket.send(JSON.stringify(chatTextSndObj));
    }, 5000);
}

function message(text, name, lvl, time) {
    var block = "<div class='chatMess'><div class='chat_message'>" + text + "</div><div class='infoChat'><div class='name'>" + name + "(" + lvl + ")</div><div class='time'>" + time + "</div></div></div>";
    $('#messageBox').append(block);
    setTimeout(() => { $('#messageBox').children(":first").first().remove() }, 30000);
}

function messageInfo(text) {
    var infoblock = "<div class='chatMess'><div class='chat_message_info'>" + text + "</div></div>";
    $('#messageBox').append(infoblock);
    setTimeout(() => { $('#messageBox').children(":first").first().remove() }, 30000);
}