(function () {
    'use strict';

    var mainHeading = document.querySelector('header :first-child');
    console.log(mainHeading); // <h1 class="heading" id="mainHeading">JavaScript Fundamentals</h1>

    var headers = document.querySelectorAll('header');
    console.log(headers); // [header, item: function]
}());