'use strict';

console.log('App is running...');

var app = {
  title: 'Indecision App',
  subtitle: 'Can\'t decide? Let the app decide for you...',
  options: ['One', 'Two']
};

var templateOne = React.createElement(
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

// var user = {
//   name: 'Anakin Skywalker',
//   age: 21,
//   location: "Corsucant"
// };
//
// var getLocation = (location) => {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
//
// var template = (
//   <div className="container">
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

var appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);
