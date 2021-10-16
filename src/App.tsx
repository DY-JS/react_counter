import React from 'react';
import './App.scss';

type State = {
  count: number;
};

class App extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };

  add100 = () => {
    this.setState((state) => ({ count: state.count + 100 }));
  };

  increase = () => {
    const { count } = this.state;

    if (count % 5 !== 0) {
      this.addOne();
    } else {
      this.addOne();
      this.add100();
    }
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="app">
        <h1>{ this.state.count }</h1>
        <input
          className="app__reset"
          type="button"
          value="Reset"
          onClick={this.reset}
        />
        <div className="app__buttons">
          <button type="button" onClick={this.addOne}>Add 1</button>
          <button type="button" onClick={this.add100}>Add 100</button>
          <button type="button" onClick={this.increase}>Special</button>
        </div>
      </div>
    );
  }
}

export default App;