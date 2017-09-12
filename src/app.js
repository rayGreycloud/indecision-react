console.log('App is running...');

var template = (
  <div>
    <h2>Indecision App</h2>
    <p>Can't decide? Let the app decide for you...</p>
  </div>
);

var username = 'Anakin Skywalker';
var userAge = 21;
var userLocation = "Corsucant";

var templateTwo = (
  <div className="container">
    <h1>{username}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
