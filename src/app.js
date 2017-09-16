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
  render() {
    return (
      <div>
        <button>What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <ol>
        {
          this.props.options.map(
            option => <Option option={option} key={this.props.options.indexOf(option)}/>
          )
        }
      </ol>
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
  onFormSubmit() {
    e.preventDefault();

    console.log('Form submitted.');
  }
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <input type="text" name="option" placeholder="add an option"/>
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));
