import React, { Component } from 'react'
import Counter from './components/Counter';
import ToDo from './components/ToDo';
import Text from './components/Text'
import UserList from './components/UserList';

class App extends Component {
  render() {
    return (
      <div>
        <UserList />
        <Counter />
        <ToDo />
        <Text/>
      </div>
    );
  }
}

export default App
