'use strict';

console.log('App is running...');

// var app = {
//   title: 'Indecision App',
//   subtitle: 'Can\'t decide? Let the app decide for you...'
// };
//
// var templateOne = (
//   <div className="container">
//     <h2>{app.title}</h2>
//     <h4>{app.subtitle}</h4>
//   </div>
// );

var user = {
  name: 'Anakin Skywalker',
  age: 17,
  location: "Corsucant"
};

var getLocation = function getLocation(location) {
  if (location) {
    return React.createElement(
      'p',
      null,
      'Location: ',
      location
    );
  }
};

var template = React.createElement(
  'div',
  { className: 'container' },
  React.createElement(
    'h1',
    null,
    user.name ? user.name : 'Anonymous'
  ),
  user.age && user.age >= 18 && React.createElement(
    'p',
    null,
    'Age: ',
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
