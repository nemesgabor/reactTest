import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, React app here.</h1>
        <p>Test text</p>
        <Person name="Test 1" age="32" />
        <Person name="Test 2" age="34" >My hobbies Racing</Person>
        <Person name="Test 3" age="36" />
        
      </div>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, React app here'))
  }
}

export default App;
