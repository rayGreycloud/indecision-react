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

var username = 'Anakin Skywalker';
var userAge = 21;
var userLocation = "Corsucant";

var templateTwo = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    'h1',
    null,
    username
  ),
  React.createElement(
    'p',
    null,
    'Age: ',
    userAge
  ),
  React.createElement(
    'p',
    null,
    'Location: ',
    userLocation
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
