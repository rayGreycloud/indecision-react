'use strict';

console.log('App is running...');

var visibility = false;

var onToggle = function onToggle() {
  visibility = !visibility;
  render();
};

var appRoot = document.getElementById('app');

var render = function render() {

  var template = React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Visibility Toggle'
    ),
    React.createElement(
      'button',
      { onClick: onToggle },
      visibility ? 'Hide details' : 'Show details'
    ),
    React.createElement(
      'p',
      null,
      visibility ? 'These are not the droids you\'re looking for...' : ''
    )
  );

  ReactDOM.render(template, appRoot);
};

render();
