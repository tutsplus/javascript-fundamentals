(function () {
    'use strict';

    function log(message) {
        console.log(message);
    }
    setTimeout(function () {
        log('woo!');
    }, 1000);

    function pulse() {
        console.log('boom, boom');
        counter += 1;

        if (counter === 5) {
            clearInterval(interval);
        }
    }
    var interval = setInterval(pulse, 1000),
        counter = 0;
}());