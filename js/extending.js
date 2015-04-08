(function () {
    'use strict';

    function Shape2d() {
        return {
            type: this.constructor.name,
            sides: []
        };
    }

    function Rectangle(width, height) {
        var shape = Shape2d.call(this);

        shape.sides.push(width, height, width, height);
        shape.getArea = function () {
            return shape.sides[0] * shape.sides[1];
        }

        return shape;
    }

    function Square(sidesLength) {
        return Rectangle.call(this, sidesLength, sidesLength);
    }

    var myRect = new Rectangle(5, 4);
    console.log(myRect.type); // Rectangle
    console.log(myRect.sides.length); // 4
    console.log(myRect.getArea()); // 20

    var mySquare = new Square(5);
    console.log(mySquare.type); // Square
    console.log(mySquare.sides.length); // 4
    console.log(mySquare.getArea()); // 25

    console.log(mySquare instanceof Object); // true
}());