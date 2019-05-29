    let clickChangeSett;

    function settingsBegin() {
        clickChangeSett = 0;
        if ($("#bigDig").is(":checked")) {
            console.log('1');
            clickChangeSett = () => {
                console.log('2');
                let oldClick = 0;
                $('#enemy').mousemove(function() {
                    console.log('3');
                    oldClick++;
                    if (oldClick % 20 == 0) {
                        click()
                    }
                })
            }
        } else {
            console.log('1/2');
            clickChangeSett = () => {
                console.log('4');
                $('#enemy').click(function() {
                    click()
                })
            }
        }
        begin(clickChangeSett);
    }