'use strict';

console.log('App is running...');

var template = React.createElement(
  'div',
  null,
  React.createElement(
    'h2',
    null,
    'Indecision App'
  ),
  React.createElement(
    'p',
    null,
    'Can\'t decide? Let the app decide for you...'
  )
);

var user = {
  name: 'Anakin Skywalker',
  age: 21,
  location: "Corsucant"
};

var templateTwo = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    'h1',
    null,
    user.name
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    user.location
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
