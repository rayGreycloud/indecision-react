// app.js

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);

    this.state = {
      title: 'Indecision',
      subtitle: 'Put your life in the hands of a computer',
      options: [
        'Plan A',
        'Plan B',
        'Plan Z'
      ]
    }
  }
  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const pick = this.state.options[randomNum];
    alert(pick);
  }
  render() {
    return (
      <div>
        <Header
          title={this.state.title}
          subtitle={this.state.subtitle}
        />
        <Action
          hasOptions={this.state.options.length> 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        />
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
        <button
          onClick={this.props.handlePick}
          disabled={!this.props.hasOptions}
        >What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
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
