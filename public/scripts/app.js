'use strict';

// ES6 arrow function examples

var user = {
  name: 'Darth',
  planets: ['Tantooine', 'Corsucant', 'Naboo'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.planets.map(function (planet) {
      return _this.name + ' has lived on ' + planet;
    });
  }
};

console.log(user.printPlacesLived());

// Challenge

var multiplier = {
  // create array of numbers to multiply
  numbers: [5, 8, 13, 21],
  // multiplyBy - single number
  multiplyBy: 8,
  // multiply - return new array with muliplied
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
