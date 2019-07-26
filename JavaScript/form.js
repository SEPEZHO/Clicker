function beginForm() {
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            var code = prompt('Читы?');
            if (code == 'root') {
                numberOfClicks += 10000;
            } else if (isNumber(code)) {
                numberOfClicks += parseInt(code);
            } else {
                numberOfClicks += 0;
                alert('Введи или число или "root". Удачи.');
            }
            reloadNumber();
        }
    });
}

function isNumber(n) { return /^-?[\d.]+(?:e-?\d+)?$/.test(n); }

function buttonReady() {
    $("#signIn").click(() => {
        $('body').append('<div id="filter"></div>');
        $('#filter').css({ position: 'absolute', background: 'black', width: '100vw', height: '100vh', opacity: 0.75, zIndex: 2, display: 'block' });
        $('#login').show().css({ top: "50vh", zIndex: 3 });
        $('#loginExit').click(() => {
            $('#login').css({ top: "45vh", display: 'none' });
            $('#filter').hide(250);
        })
        $('#linkReg').click(() => {
            $('#login').css({ top: "45vh", display: 'none' });
            $('#registration').show().css({ top: "50vh", zIndex: 3 });
            $('#regExit').click(() => {
                $('#filter').hide(250);
                $('#registration').css({ top: "45vh", display: 'none' });
            })
        })
    })
}

function sendMailToDev() {
    $("#sendMail").click(() => {
        $('body').append('<div id="filter"></div>');
        $('#filter').css({ position: 'absolute', background: 'black', width: '100vw', height: '100vh', opacity: 0.75, zIndex: 2, display: 'block' });
        $('#sendMailForm').show().css({ top: "50vh", zIndex: 3 });
        $('#sendMailExit').click(() => {
            $('#sendMailForm').css({ top: "45vh", display: 'none' }).hide();
            $('#filter').hide(250);
        })
    })
}


var isLog = false;
var login;
var id;

function ajaxA() {
    $('#submitLogin').click(() => {
        if (!isLog) {
            var loginFun = $('#loginLog').val();
            var pass = $('#passLog').val();
            var error = false;
            if (loginFun == '') {
                error = true;
                $('#error_login').text('Введите логин');
            } else {
                $('#error_login').empty();
            }
            if (pass == '') {
                error = true;
                $('#error_pass').text('Введите пароль');
            } else {
                $('#error_pass').empty();
            }
            if (!error) {
                $.ajax({
                    type: 'POST',
                    url: '../php/login.php',
                    dataType: 'json',
                    cache: false,
                    data: { login: loginFun, pass: pass },
                    success: (responce) => {
                        console.log('DONE');
                        console.log('login: ' + loginFun);
                        console.log('Error_login: ' + responce.error_login);
                        console.log('Error_pass: ' + responce.error_pass);
                        console.log('id: ' + responce.id);
                        console.log('clicks: ' + responce.clicks);
                        console.log('inventory: ' + responce.inventory);
                        console.log('settings: ' + responce.settings);
                        console.log('<------------------------------>');
                        if (responce.error_pass == '') {
                            isLog = true;
                            login = loginFun;
                            id = responce.id;
                            $('#login').css({ top: "45vh" }).hide();
                            $('#filter').remove();
                            logFunc(loginFun, responce.clicks, responce.inventory, responce.settings)
                        } else {
                            $('#loginLog').val(loginFun);
                            $('#passLog').val(pass);
                            $('#error_pass').text(responce.error_pass);
                        }
                    },
                    error: () => { console.log('ERROR') }
                })
            }
        } else {
            alert('Вы уже вошли в аккаунт.');
        }
    })

    $('#submitRegistr').click(() => {
        if (!isLog) {
            var mailReg = $('#mailReg').val();
            var loginReg = $('#loginReg').val();
            var pass1Reg = $('#pass1Reg').val();
            var pass2Reg = $('#pass2Reg').val();
            var error = false;
            if (mailReg == '') {
                error = true;
                $('#error_mailReg').text('Введите email');
            } else if (!(mailReg.indexOf('@') >= 0)) {
                $('#error_mailReg').text('Email должен содержать "@"');
            } else { $('#error_mailReg').empty(); }
            if (loginReg == '') {
                error = true;
                $('#error_loginReg').text('Введите login');
            } else { $('#error_loginReg').empty() }
            if (pass1Reg.length < 5) {
                error = true;
                $('#error_pass2Reg').empty();
                $('#error_pass1Reg').text("Пароль должен содержать не менее 5 символов");
            } else if (pass1Reg != pass2Reg) {
                error = true;
                $('#error_pass1Reg').empty();
                $('#error_pass2Reg').text("Пароли должны совпадать");
            } else {
                $('#error_pass1Reg').empty();
                $('#error_pass2Reg').empty();
            }
            if (!error) {
                var inv = JSON.stringify(inventory);
                var arr = JSON.stringify(setArr);
                $.ajax({
                    type: 'POST',
                    url: '../php/registr.php',
                    dataType: 'json',
                    cache: false,
                    data: {
                        mail: mailReg,
                        login: loginReg,
                        pass: pass1Reg,
                        numCl: numberOfClicks,
                        inv: inv,
                        set: arr
                    },
                    success: (responce) => {
                        console.log('DONE');
                        console.log('mail: ' + mailReg);
                        console.log('login: ' + loginReg);
                        console.log('pass1: ' + pass1Reg);
                        console.log('pass2: ' + pass2Reg);

                        console.log('Error_mail: ' + responce.error_mail);
                        console.log('Error_login: ' + responce.error_login);
                        console.log('Error_pass: ' + responce.error_pass);
                        console.log('<------------------------------>');

                        if (responce.error_mail == '' && responce.error_login == '' && responce.error_pass == '') {
                            isLog = true;
                            alert('Вы успешно зарегестрированны, ' + loginReg);
                            $('#registration').css({ top: "45vh" }).hide();
                            $('#filter').remove();
                        } else {
                            $('#mailReg').val(mailReg);
                            $('#loginReg').val(loginReg);
                            $('#pass1Reg').val(pass1Reg);
                            $('#pass2Reg').val(pass2Reg);
                            $('#error_mailReg').text(responce.error_mail);
                            $('#error_loginReg').text(responce.error_login);
                            $('#error_pass2Reg').text(responce.error_pass);
                        }
                    },
                    error: () => {
                        console.log('ERROR');
                        console.log('<------------------------------>');
                    }
                })
            }
        } else {
            alert('Вы уже вошли в аккаунт.');
        }
    })

    $('#save').click(() => {
        if (isLog) {
            var inv = JSON.stringify(inventory);
            var arr = JSON.stringify(setArr);
            $.ajax({
                type: 'POST',
                url: '../php/save.php',
                dataType: 'json',
                cache: false,
                data: {
                    id: id,
                    numCl: numberOfClicks,
                    inv: inv,
                    set: arr
                },
                success: (responce) => {
                    console.log('DONE');
                    console.log('Is UPDATE:' + responce.done);
                    console.log('<------------------------------>');
                    if (responce.done == 'done') {
                        alert('Данные успешно сохранены');
                    } else {
                        alert('Прооизошла ошибка при сохранении данных.')
                    }
                },
                error: () => { console.log('ERROR') }
            })
        } else {
            alert('Вам следует войти или зарегестрироваться.')
        }
    })

    $('#sendMailSubmit').click(() => {
        var mailSnd = $('#mailForm').val();
        var subjectSnd = $('#subjectForm').val();
        var messageSnd = $('#messageForm').val();
        var error = false;

        if (mailSnd == '') {
            error = true;
            $('#error_mailSnd').text('Введите email');
        } else if (!(mailSnd.indexOf('@') >= 0)) {
            $('#error_mailSnd').text('Email должен содержать "@"');
        } else { $('#error_mailSnd').empty(); }

        if (subjectSnd == '') {
            error = true;
            $('#error_sub').text('Введите тему сообщения');
        } else {
            $('#error_sub').empty();
        }
        if (messageSnd == '') {
            error = true;
            $('#error_mess').text('Введите сообщение');
        } else {
            $('#error_mess').empty();
        }
        if (!error) {
            $.ajax({
                type: 'POST',
                url: '../php/sendMail.php',
                dataType: 'json',
                cache: false,
                data: {
                    mailSnd: mailSnd,
                    subjectSnd: subjectSnd,
                    messageSnd: messageSnd,
                },
                success: (responce) => {
                    console.log('DONE');
                    console.log('mailSnd: ' + mailSnd);
                    console.log('subjectSnd: ' + subjectSnd);
                    console.log('messageSnd: ' + messageSnd);

                    console.log('Is_done: ' + responce.done);
                    console.log('<------------------------------>');

                    if (responce.done == 'Done') {
                        alert('Вы успешно отправили почту разработчику.');
                        $('#sendMailForm').css({ top: "45vh" }).hide();
                        $('#filter').remove();
                    } else {
                        $('#mailForm').val(mailSnd);
                        $('#subjectForm').val(subjectSnd);
                        $('#messageForm').val(messageSnd);
                        $('#error_mess').text('Произошла ошибка при отправке почты');
                    }
                },
                error: () => {
                    console.log('ERROR');
                    console.log('<------------------------------>');
                }
            })
        }
    })
}