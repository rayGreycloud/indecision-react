console.log('App is running...');

const app = {
  title: 'Indecision App',
  subtitle: 'Can\'t decide? Let the app decide for you...',
  options: []
};

const onFormSubmit = (e) => {
  e.preventDefault();

  const option = e.target.elements.option.value;

  if (option) {
    app.options.push(option);
    e.target.elements.option.value = '';
    renderTemplate();
  }
};

const appRoot = document.getElementById('app');

const renderTemplate = () => {
  const template = (
    <div className="container">
      <h2>{app.title}</h2>
      {app.subtitle && <h4>{app.subtitle}</h4>}
      <p>{app.options.length > 0 ? 'Here are your options' : 'No options' }</p>
      <p>{app.options.length}</p>
      <ol>
        <li>A</li>
        <li>B</li>
      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    </div>
  );

  ReactDOM.render(template, appRoot);
};

renderTemplate();
