'use strict';

console.log('App is running...');

var template = React.createElement(
  'h2',
  null,
  'Indecision App'
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
