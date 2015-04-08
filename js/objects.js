(function () {
    'use strict';

    var myObject = {};

    console.log(myObject.constructor); // Object() { [native code] }
    console.log(myObject.hasOwnProperty('constructor')); // false
    myObject.testProperty = 'test';
    console.log(myObject.hasOwnProperty('testProperty')); // true

    console.log(myObject.propertyIsEnumerable('constructor')); // false
    console.log(myObject.propertyIsEnumerable('testProperty')); // true

    console.log(myObject.toString()); // [object Object]
    console.log(['test', 'something'].toString()); // test,something

    console.log(Object.prototype.toString.call([])); // [object Array]
}());