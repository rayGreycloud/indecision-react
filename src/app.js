// app.js

class IndecisionApp extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
      </div>
    )
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
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
        <Option />
        <Option />
        <Option />
      </ol>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <li>Option ___</li>
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
