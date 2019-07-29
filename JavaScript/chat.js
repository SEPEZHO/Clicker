function chatBegin() {
    $('#chat').hide();
    $('#chatButtonBegin').click(() => {
        $("footer > section:not('#chat')").hide();
        $('#chat').show();
        $('.exit').click(() => {
            $('#chat').hide();
        })
    });

    var socket = new WebSocket('ws://localhost:8080/clicker 8.2.4/php/chat.php');
    socket.onopen = function() {
        message("Соединение установлено.");
    };
    socket.onclose = function(event) {
        if (event.wasClean) {
            message('Соединение закрыто чисто');
        } else {
            message('Обрыв соединения');
        }
        message('Код: ' + event.code + ' причина: ' + event.reason);
    };
    socket.onmessage = function(event) {
        var data = JSON.parse(event.data);
        if (data.type == 'mess') {
            message(data.time + '|' + data.login + '(' + data.lvl + ')|' + data.message);
        }else{
            message(data.time + '|' + data.type);
        }
    };
    socket.onerror = function(error) {
        message("Ошибка " + error.message);
    };

    $('#chatButtonSnd').click(() => {
        if (isLog) {
            var error = false;
            var chatTextSnd = $('#chatTextSnd').val();
            if (chatTextSnd == '') {
                error = true;
                $('#error_text').text('Введите сообщение');
            } else if (chatTextSnd.length >= 70) {
                error = true;
                $('#error_text').text('Сообщение превышает лимит в 70 знаков сейчас знаков-' + chatTextSnd.length);
            } else {
                $('#error_text').empty();
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
}

function message(text) {
    $('#messageBox').append('<div>' + text + '</div>');
}