// ES6 arrow function examples

const user = {
  name: 'Darth',
  planets: ['Tantooine', 'Corsucant', 'Naboo'],
  printPlacesLived: function () {
    this.planets.forEach((planet) => {
      console.log(this.name + ' has lived on ' + planet);
    });
  }
};

user.printPlacesLived();
