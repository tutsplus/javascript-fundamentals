(function () {
    'use strict';

    var xhr = new XMLHttpRequest();
    //xhr.onload = function () {
    //    console.log(JSON.parse(xhr.responseText));
    //};
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            console.log(JSON.parse(xhr.responseText)); // Array[2]
        }
    };
    xhr.withCredentials = true;
    console.log(xhr); // XMLHttpRequest

    xhr.open('GET', 'js/data.json');
    xhr.send();
}());