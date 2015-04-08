(function () {
    'use strict';

    function Shape2d() { }
    Shape2d.prototype.getArea = function () {
        return this.sides[0] * this.sides[1];
    }

    function Rectangle(width, height) {
        this.sides = [width, height, width, height];
    }
    Rectangle.prototype = new Shape2d();
    Rectangle.prototype.constructor = Rectangle;

    function Square(sidesLength) {
        this.sides = [sidesLength, sidesLength, sidesLength, sidesLength];
    }
    Square.prototype = new Shape2d();
    Square.prototype.constructor = Square;

    function Triangle(sideALength, sideBLength, sideCLength) {
        this.getArea = function () {
            var semiperimeter = (sideALength + sideBLength + sideCLength) / 2;
            return Math.sqrt(semiperimeter * (semiperimeter - sideALength) * (semiperimeter - sideBLength) * (semiperimeter - sideCLength));
        }
    }
    Triangle.prototype = new Shape2d();
    Triangle.prototype.constructor = Triangle;

    var myRect = new Rectangle(5, 4);
    console.log(myRect.constructor.name); // Rectangle
    console.log(myRect.sides.length); // 4
    console.log(myRect.getArea()); // 20
    console.log(myRect.hasOwnProperty('getArea')); // false
    console.log(myRect instanceof Rectangle); // true

    var myTriangle = new Triangle(4, 5, 6);
    console.log(myTriangle.getArea());
}());