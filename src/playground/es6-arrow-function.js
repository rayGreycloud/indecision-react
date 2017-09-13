// ES6 arrow function examples

const user = {
  name: 'Darth',
  planets: ['Tantooine', 'Corsucant', 'Naboo'],
  printPlacesLived() {
    return this.planets.map((planet) => this.name + ' has lived on ' + planet);
  }
};

console.log(user.printPlacesLived());

// Challenge

const multiplier = {
  // create array of numbers to multiply
  numbers: [5, 8, 13, 21],
  // multiplyBy - single number
  multiplyBy: 8,
  // multiply - return new array with muliplied
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
