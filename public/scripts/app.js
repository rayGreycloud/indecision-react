'use strict';

console.log('App is running...');

var app = {
  title: 'Indecision App',
  subtitle: 'Can\'t decide? Let the app decide for you...'
};

var templateOne = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    'h2',
    null,
    app.title
  ),
  React.createElement(
    'h4',
    null,
    app.subtitle
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

ReactDOM.render(templateOne, appRoot);
