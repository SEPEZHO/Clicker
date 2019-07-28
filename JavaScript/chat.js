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
        message("Получены данные " + data.type +'/'+data.message+'/'+data.lvl+'/'+data.login+'/'+data.time);
    };

    socket.onerror = function(error) {
        message("Ошибка " + error.message);
    };




    $('#chatButtonSnd').click(() => {
        isLog = true;
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

                message(chatTextSnd);

                //     $.ajax({
                //         type: 'POST',
                //         url: '../php/chat.php',
                //         dataType: 'json',
                //         cache: false,
                //         data: {
                //             login: login,
                //             lvl: lvl,
                //             message: chatTextSnd
                //         },
                //         success: (responce) => {
                //             console.log('DONE');
                //             console.log('Is snd:' + responce.snd);
                //             console.log('<------------------------------>');
                //             if (responce.snd != 'done') {
                //                 cAlert('Прооизошла ошибка при отправке сообщения.')
                //             }
                //         },
                //         error: () => {
                //             console.log('ERROR');
                //             cAlert('Произошла неизвестная ошибка.')
                //         }
                //     })
            }
        } else {
            cAlert('Вам следует войти или зарегестрироваться.')
        }
    })
}

function message(text) {
    $('#messageBox').append('<div>' + text + '</div>');
    //<div id ="chatMessLog">' + login + '</div><div id ="chatMessLvl">' + lvl + '</div>' + chatTextSnd + 
}