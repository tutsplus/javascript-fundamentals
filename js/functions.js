(function () {
    'use strict';

    var testFunction = function testFunction(arg1, arg2) {
        return arg1 + arg2;
    }

    console.log(testFunction.length); // 2

    var person = {
        name: 'Dan',
        job: 'Developer'
    }
    function introduce(inductee) {
        console.log('Hey ' + inductee + '! My name is ' + this.name + ', and I\'m a ' + this.job);
    }
    introduce.call(person, 'Bob'); // Hey Bob! My name is Dan, and I'm a Developer

    function chat(respondent, subject) {
        console.log('So ' + respondent + ', what about the ' + subject + ' huh? Pretty good for a ' + this.job + ' like me right?');
    }

    function engage(mode, object, args) {
        mode.apply(object, args);
    }

    engage(introduce, person, ['Fred']); // Hey Fred! My name is Dan, and I'm a Developer
    engage(chat, person, ['Al', 'new IDE']); // So Al, what about the new IDE huh? Pretty good for a Developer like me right?

    function addToCart(fee, price) {
        if (!this.total) {
            this.total = 0;
        }

        this.total += price += fee || 0;
        return this.name + '\'s cart total is £' + this.total;
    }

    var dansCart = addToCart.bind(person, 1);

    console.log(dansCart(50)); // Dan's cart total is £51
    console.log(dansCart(100)); // Dan's cart total is £152

    var bob = {
        name: 'Bob'
    };
    var bobsCart = addToCart.bind(bob, 5);
    console.log(bobsCart(50)); // Bob's cart total is £55
    console.log(bobsCart(100)); // Bob's cart total is £160

}());