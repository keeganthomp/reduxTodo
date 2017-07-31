import React, { Component } from 'react';
import './App.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoInput/>
        <TodoList/>
      </div>
    );
  }
}

export default App;
