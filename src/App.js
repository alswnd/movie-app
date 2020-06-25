import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import PropTypes from 'prop-types';

class App extends React.Component {
  state = {
    count: 0
  }

  boo() {
    console.log('boo is working');
  }

  add = () => {
    this.setState(current => ({ count: current.count + 1 }));
  };

  minus = () => {
    this.setState(current => ({ count: current.count - 1 }));
  };

  render() {
    return (<div>
      <h1>The number is {this.state.count}</h1>
      <button onClick={this.add}>add</button>
      <button onClick={this.minus}>minus</button>
      <button onClick={this.boo}>boo</button>
    </div>);
  }
}

export default App;
