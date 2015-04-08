(function () {
    'use strict';

    console.log(window.sessionStorage); // Storage { length: 0 }

    window.sessionStorage.setItem('testItem', true);
    window.sessionStorage.setItem('testItem2', ['test1', 'test2']);
    window.sessionStorage.setItem('testItem3', JSON.stringify({ prop1: 'oops' }));

    console.log(JSON.parse(window.sessionStorage.getItem('testItem3'))); // Object { prop1: "oops" }

    function readStorageKeys() {
        var x, length;
        for (x = 0, length = window.sessionStorage.length; x < length; x += 1) {
            console.log(window.sessionStorage.key(x)); // testItem...
        }
    }
    readStorageKeys();

    window.sessionStorage.removeItem('testItem3');
    window.sessionStorage.clear();
}());