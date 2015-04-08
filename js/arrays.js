(function () {
    'use strict';

    var array = ['one', 'two', 'three'];
    console.log(array.length); // 3

    array.push('four');
    console.log(array); // ['one', 'two', 'three', 'four']

    array.unshift('zero');
    console.log(array); // ['zero', 'one', 'two', 'three', 'four']

    console.log(array.pop()); // four
    console.log(array.shift()); // zero

    array.splice(0, 3, 'a', 'b', 'c');
    console.log(array); // ['a', 'b', 'c']

    console.log(array.reverse()); // ['c', 'b', 'a']

    console.log(array.sort()); // ['a', 'b', 'c']

    console.log(['a', 'b', 'C'].sort()); // ['C', 'a', 'b']
    console.log([3, 20, 10000].sort(function (a, b) {
        if (a < b) {
            return -1;
        } else if (a === b) {
            return 0;
        } else {
            return 1;
        }
    })); // [3, 20, 10000]

    console.log(array.join('')); // abc

    console.log(array.indexOf('b')); // 1

    console.log(array.slice(1)); // ['b', 'c']
    console.log(array.slice(-2)); // ['b', 'c']
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