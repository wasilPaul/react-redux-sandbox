import React, { Component } from 'react'
import Counter from './components/Counter';
import ToDo from './components/ToDo';
import Text from './components/Text'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <ToDo />
        <Text/>
      </div>
    );
  }
}

export default App
