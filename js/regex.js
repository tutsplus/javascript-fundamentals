(function () {
    'use strict';

    var pattern = /@/;
    console.log(pattern.test('me@somewhere.com')); // true

    var letters = /^[A-Z]+$/;
    console.log(letters.test('R2-D2')); // false

    var alphaNumeric = /^[a-zA-Z0-9]+$/;
    console.log(alphaNumeric.test('as11X')); // true

    var numberFormat = /^\d{3}\*\d{3,6}\*\d{3}$/;
    console.log(numberFormat.test('123*12345*123')); // true

    var noSpecialCharacters = /^\w+$/;
    console.log(noSpecialCharacters.test('abc*123')); // false

    var url = /^http(?:s?):/;
    console.log(url.test('https://google.co.uk')); // true

    var camelCased = 'CamelCasedString';
    console.log(camelCased.replace(/([A-Z])/g, '_$1').toLowerCase()); // _camel_cased_string

    var script = /java(?!script)/i;
    console.log(script.test('Java')); // true

    var lettersAndNumbers = /\d/g;
    console.log('a5b4c3d3e1'.match(lettersAndNumbers)); // ["5", "4", "3", "2", "1"]
}());