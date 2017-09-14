'use strict';

console.log('App is running...');

var app = {
  title: 'Indecision App',
  subtitle: 'Can\'t decide? Let the app decide for you...',
  options: ['One', 'Two']
};

var template = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    'h2',
    null,
    app.title
  ),
  app.subtitle && React.createElement(
    'h4',
    null,
    app.subtitle
  ),
  React.createElement(
    'p',
    null,
    app.options.length > 0 ? 'Here are your options' : 'No options'
  )
);

var count = 0;
var addOne = function addOne() {
  count++;
  console.log('Count: ' + count);
};
var minusOne = function minusOne() {
  count--;
  console.log('Count: ' + count);
};
var reset = function reset() {
  count = 0;
  console.log('Count: ' + count);
};

var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Count: ',
    count
  ),
  React.createElement(
    'button',
    { onClick: addOne },
    '+1'
  ),
  React.createElement(
    'button',
    { onClick: minusOne },
    '-1'
  ),
  React.createElement(
    'button',
    { onClick: reset },
    'reset'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
