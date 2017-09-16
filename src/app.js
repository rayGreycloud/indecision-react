// app.js

class IndecisionApp extends React.Component {
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';
    const options = [
      'Plan A',
      'Plan B',
      'Plan Z'
    ];

    return (
      <div>
        <Header
          title={title}
          subtitle={subtitle}
        />
        <Action />
        <Options options={options}/>
        <AddOption />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('What should I do button clicked!');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
  handleRemoveAll() {
    console.log(this.props.options);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleRemoveAll}>Remove All</button>
        <ol>
          {
            this.props.options.map(
              option => <Option option={option} key={this.props.options.indexOf(option)}/>
            )
          }
        </ol>
      </div>

    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>{this.props.option}</li>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      // app.options.push(option);
      // e.target.elements.option.value = '';
      alert('Add Option button clicked!');
    }
  }
  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" placeholder="add an option"/>
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
