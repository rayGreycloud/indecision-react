'use strict';

// ES6 arrow function examples

var user = {
  name: 'Darth',
  planets: ['Tantooine', 'Corsucant', 'Naboo'],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    this.planets.forEach(function (planet) {
      console.log(_this.name + ' has lived on ' + planet);
    });
  }
};

user.printPlacesLived();
