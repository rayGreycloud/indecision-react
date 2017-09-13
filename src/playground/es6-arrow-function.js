// ES6 arrow function examples

const user = {
  name: 'Darth',
  planets: ['Tantooine', 'Corsucant', 'Naboo'],
  printPlacesLived() {
    return this.planets.map((planet) => this.name + ' has lived on ' + planet);
  }
};

console.log(user.printPlacesLived());
