import React, { Component } from 'react'
import Counter from './components/Counter';
import ToDo from './components/ToDo';


class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <ToDo />
      </div>
    );
  }
}

export default App
