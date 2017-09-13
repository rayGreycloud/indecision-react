console.log('App is running...');

const app = {
  title: 'Indecision App',
  subtitle: 'Can\'t decide? Let the app decide for you...',
  options: ['One', 'Two']
};

const templateOne = (
  <div className="container">
    <h2>{app.title}</h2>
    {app.subtitle && <h4>{app.subtitle}</h4>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
  </div>
);

// const user = {
//   name: 'Anakin Skywalker',
//   age: 21,
//   location: "Corsucant"
// };
//
// const getLocation = (location) => {
//   if (location) {
//     return <p>Location: {location}</p>;
//   }
// }
//
// const template = (
//   <div className="container">
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

const appRoot = document.getElementById('app');

ReactDOM.render(templateOne, appRoot);
