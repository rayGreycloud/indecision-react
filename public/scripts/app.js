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
