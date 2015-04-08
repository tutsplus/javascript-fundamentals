// single line comment

/* multiline
comment */

console.log('<3');

//alert('oh noes!');

var theMeaningOfLife = 42,
    foo = 'bar',
    baz, quux;

foo = baz;

var number = 1;
var string = 'hello';
var quotes = '"Hello", said the man';
var escaped = '"Oh no you ditn\'t" she said';
var joined = 'wait, ' + 'what?';
var array = [5, 'something', true]; //array[0]
var object = {
    myNumber: 10,
    myString: 'woohoo!'
};

object.myNumber; // 10
object['myString']; // woohoo!

var addition = 1 + 1; // addition = 2
var subtraction = 1 - 1; // subtraction = 0
var multiplication = 5 * 2; // multiplication = 10
var division = 5 / 2.5; // division = 2
var remainder = 5 % 2; // remainder = 1

var postfix = 5;
var prefix = 5;

var additionAssignment = 1;
additionAssignment += 1; // additionAssignment = 2
var subtractionAssignment = 1;
subtractionAssignment -= 1; // subtractionAssignment = 0

var mulitplicationAssignment = 2;
var divisionAssignment = 5;
var modulusAssignment = 5;
mulitplicationAssignment *= 2; // multiplicationAssignment = 4
divisionAssignment /= 2.5; // divisionAssignment = 2
modulusAssignment %= 2; // modulusAssignment = 1

var precedence = 1 + 4 * 2; // precedence = 9
var precedence2 = (1 + 4) * 2; // precedence2 = 10
var precedence3 = 2 + 10 - 2; // precedence3 = 10

var object = {
    property1: true,
    property2: 'hello'
};

var string = 'hello';
var stringObject = new String('An object string');

function getThingByColour(colour) {
    var things = {
        red: 'a red thing',
        green: 'a green thing',
        blue: 'a blue thing'
    };

    return things[colour] || 'Sorry, no thing of that colour exists';
}

function myFunction(message) {
    console.log(message);

    return true;
}

var myOtherFunction = function myOtherFunction() {
    console.log('function expression');
};

console.log(hoistedVariable);
var hoistedVariable = 'test';

(function invokeImmediately() {
    console.log('invoked automatically');
}());

!function alsoInvokedAutomatically() {
    console.log('invoked automatically too');
}();

var global = 1;
function aFunction() {
    var local = 2;
    console.log(global);
    console.log(local);
}

(function () {
    'use strict';
    console.log(this);

    var object = {
        property: 'I belong to this',
        method: function () {
            return this.property;
        }
    }

    console.log(object.method());

    function Person(name) {
        this.name = name;
    }

    var bob = new Person('Bob');
    console.log(bob.name);
}());

var element = {
    'class': 'some-class'
};