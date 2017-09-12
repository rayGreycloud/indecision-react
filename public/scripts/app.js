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

var templateTwo = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    'h1',
    null,
    'Anakin Skywalker'
  ),
  React.createElement(
    'p',
    null,
    'Age: 10'
  ),
  React.createElement(
    'p',
    null,
    'Location: Tantooine'
  )
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
