function beginForm() {
    $(document).keydown(function(e) {
        if (e.keyCode === 27) {
            var code = prompt('Читы?');
            if (code == 'root') {
                numberOfClicks += 10000;
            } else {
                if (code % 1 == 0) {
                    numberOfClicks += parseInt(code);
                }else{
                	alert('Введи или число или "root". Удачи.');
                }
            }
            reloadNumber();
        }
    });
}