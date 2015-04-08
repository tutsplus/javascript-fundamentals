(function () {
    'use strict';

    var newObject = {};
    Object.prototype.mySpecialProperty = 'special!';
    console.log(newObject.mySpecialProperty); // special

    var newArray = [1, 2, 3];
    if (!Array.prototype.first) {
        Array.prototype.first = function () { return this[0] };
    }
    console.log(newArray.first()); // 1

    newObject.prop1 = 'prop1';
    Object.keys(newObject).forEach(function (item) {
        console.log(newObject[item]); // prop1
    });

    Object.freeze(newObject);

    if (!Object.isFrozen(newObject)) {
        newObject.prop1 = 'updated prop!';
    }

    var unFrozenObj = {};
    Object.keys(newObject).forEach(function (item) {
        unFrozenObj[item] = newObject[item];
    });

    Object.seal(unFrozenObj);
    unFrozenObj.prop1 = 'woohoo!';
    console.log(unFrozenObj.prop1); //woohoo

    if (!Object.isSealed(unFrozenObj)) {
        delete unFrozenObj.prop1;
    }

    var extensible = {};
    console.log(Object.isExtensible(extensible));

    Object.preventExtensions(extensible);
    if (Object.isExtensible(extensible)) {
        extensible.newProperty = 'new';
    }
    console.log(extensible); // {}

    var Person = function (name) {
        this.name = name;
    }

    Person.prototype = {
        greet: function () {
            return this.name;
        }
    }

    var fred = new Person('Fred');
    console.log(fred.greet()); // Fred
    console.log(fred); // { name: 'Fred', greet: function () { return this.name; } }

    var bob = Object.create(Person.prototype, {
        name: { writable: true, value: 'Bob' }
    });
    Object.defineProperty(bob, 'job', {
        value: 'Developer',
        writable: true,
        configurable: true,
        enumerable: true
    });
    Object.defineProperties(bob, {
        heightInCm: {
            value: 183
        },
        weightInKg: {
            value: 75
        }
    });
    console.log(bob.greet()); // Bob
    console.log(bob.job); // Developer
    console.log(bob); // { name: 'Bob', heightInCm: 183, weightInKg: 75, greet: function () { return this.name; } }
}());