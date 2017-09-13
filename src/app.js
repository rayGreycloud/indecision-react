console.log('App is running...');

var app = {
  title: 'Indecision App',
  subtitle: 'Can\'t decide? Let the app decide for you...',
  options: ['One', 'Two']
};

var templateOne = (
  <div className="container">
    <h2>{app.title}</h2>
    {app.subtitle && <h4>{app.subtitle}</h4>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
  </div>
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
