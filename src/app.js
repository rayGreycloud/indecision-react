console.log('App is running...');

var template = (
  <div>
    <h2>Indecision App</h2>
    <p>Can't decide? Let the app decide for you...</p>
  </div>
);

var user = {
  name: 'Anakin Skywalker',
  age: 21,
  location: "Corsucant"
};

var templateTwo = (
  <div className="container">
    <h1>{user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
