(function () {
    'use strict';

    if (1 + 1 === 3) {
        console.log('The expression is true');
    }

    if (true === false) {
        console.log('We will never see this');
    } else {
        console.log('We will always see this');
    }

    var colour = 'red';
    if (colour === 'blue') {
        console.log('It is blue');
    } else if (colour === 'green') {
        console.log('It is green');
    } else {
        console.log('It is red');
    }

    if (1) {
        console.log('We will definitely see this');
    }

    var array = ['item1'];
    if (array.length) {
        console.log(array[0]);
    }

    (true) ? console.log('This one') : console.log('Not this one');

    var switcher = 'three';
    switch (switcher) {
        case 'one':
            console.log('one');
            break;
        case 'two':
            console.log('two');
            break;
        default:
            console.log(switcher);
    }

    var anArray = ['item1', 'item2', 'item3'];
    for (var x = 0, y = anArray.length; x < y; x+=1) {
        console.log(anArray[x]);
    }

    var anObject = {
        prop1: 'property1',
        prop2: 'property2',
        prop3: 'property3'
    };
    for (var prop in anObject) {
        if (anObject.hasOwnProperty(prop)) {
            console.log(anObject[prop]);
        }
    }

    var limit = 0;
    while (limit < 5) {
        if (limit === 3) {
            break;
        }
        console.log(limit += 1);
    }

    var condition = true;
    do {
        console.log('once');
        break;
    } while (condition);
}());