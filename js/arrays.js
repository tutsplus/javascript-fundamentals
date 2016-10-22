(function () {
    'use strict';

    var array = ['one', 'two', 'three'];

    console.log(array.length); // 3

    array.push('four');
    console.log(array); // ['one', 'two', 'three', 'four']

    array.unshift('zero');
    console.log(array); // ['zero', 'one', 'two', 'three', 'four']

    array.pop();
    console.log(array); // ['zero', 'one', 'two', 'three']

    array.shift();
    console.log(array); // ['one', 'two', 'three']

    array.splice(0, 3, 'a', 'b', 'c');
    console.log(array); // ['a', 'b', 'c']

    array.reverse();
    console.log(array); // ['c', 'b', 'a']

    array.sort();
    console.log(array); // ['a', 'b', 'c']

    console.log(['a', 'C', 'b'].sort()); // ['C', 'a', 'b']

    console.log([20, 10000, 3].sort()); // [10000, 20, 3]

    console.log([20, 10000, 3].sort(function (a, b) {
        return a - b;
    })); // [3, 20, 10000]

    console.log(['a', 'C', 'b'].sort(function (a, b) {
        var caselessA = a.toLowerCase(),
            caselessB = b.toLowerCase();

        if (caselessA < caselessB) {
            return -1;
        } else if (caselessA === caselessB) {
            return 0;
        } else {
            return 1;
        }
    })); // ['a', 'b', 'C']

    console.log([{ name: 'a' }, { name: 'C' }, { name: 'b' }].sort(function (a, b) {
        var caselessA = a.name.toLowerCase(),
            caselessB = b.name.toLowerCase();

        if (caselessA < caselessB) {
            return -1;
        } else if (caselessA === caselessB) {
            return 0;
        } else {
            return 1;
        }
    })); // [{ name: 'a' }, { name: 'b' }, { name: 'C' }]

    console.log(array.join('')); // abc

    console.log(array.indexOf('b')); // 1

    console.log(array.slice(0, -1)); // ['a', 'b']

    array.forEach(function (value, index) {
        console.log('Item at index ' + index + ' has the value ' + value); // Item at index 0 has the value a...
    });

    console.log(array.every(function (value) {
        return typeof value === 'string';
    })); // true

    console.log(['a', 1, 'b', 2, 'c', 3].filter(function (value) {
        return typeof value !== 'number';
    })); // ['a', 'b', 'c']

    console.log(array.map(function (value) {
        return value.toUpperCase();
    })); // ['A', 'B', 'C']

    console.log([1, 2, 3].reduce(function (total, value) {
        return total += value;
    }, 4)); // 10
}());
