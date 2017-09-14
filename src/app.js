console.log('App is running...');

const app = {
  title: 'Indecision App',
  subtitle: 'Can\'t decide? Let the app decide for you...',
  options: ['One', 'Two']
};

const template = (
  <div className="container">
    <h2>{app.title}</h2>
    {app.subtitle && <h4>{app.subtitle}</h4>}
    <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
  </div>
);

let count = 0;
const addOne = () => {
  count++;
  renderCounterApp();
};
const minusOne = () => {
  count--;
  renderCounterApp();
};
const reset = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById('app');

const renderCounterApp = () => {

  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
