console.log('App is running...');

let visibility = false;

const onToggle = () => {
  visibility = !visibility;
  render();
};

const appRoot = document.getElementById('app');

const render = () => {

  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>{visibility ? 'Hide details' : 'Show details'}</button>
      <p>{visibility ? 'These are not the droids you\'re looking for...' : ''}</p>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

render();
