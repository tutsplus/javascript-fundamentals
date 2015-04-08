(function () {
    'use strict';

    var subHeading = document.getElementsByTagName('h2')[0];
    var header = document.getElementsByTagName('header')[0];

    //subHeading.addEventListener('click', function () {
    //    console.log('The h2 was clicked!');
    //});

    header.addEventListener('click', function (e) {
        console.log('The ' + e.target.nodeName + ' was clicked');
        e.stopPropagation();
    });

    document.addEventListener('click', function () {
        console.log('something was clicked');
    });

    var anchor = document.createElement('a');
    anchor.textContent = 'google';
    anchor.setAttribute('href', 'http://google.co.uk');
    document.body.appendChild(anchor);

    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        console.log('navigation prevented');
    });

    function mouseenterHandler() {
        console.log('The mouse is in the header');
    }
    header.addEventListener('mouseenter', mouseenterHandler);
    header.removeEventListener('mouseenter', mouseenterHandler);
}());