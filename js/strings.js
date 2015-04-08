(function () {
    'use strict';

    var testString = 'test string';

    console.log(testString.length); // 11

    console.log(testString.split(' ')); // ["test", "string"]
    console.log(testString.indexOf('t', 1)); // 3
    console.log(testString.lastIndexOf('t')); // 6

    console.log(testString.toUpperCase()); // TEST STRING

    console.log(testString.substring(5)); // string
    console.log(testString.substring(0, 4)); // test

    console.log(testString.slice(5)); // string
    console.log(testString.slice(0, 4)); // test
    console.log(testString.slice(-6)); // string
    console.log(testString.slice(2, -2)); // st stri

    console.log('     test     '.trim()); // test
}());