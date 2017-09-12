console.log('App is running...');

var template = (
  <div>
    <h2>Indecision App</h2>
    <p>Can't decide? Let the app decide for you...</p>
  </div>
);

var templateTwo = (
  <div className="container">
    <h1>Anakin Skywalker</h1>
    <p>Age: 10</p>
    <p>Location: Tantooine</p>
  </div>
)
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
