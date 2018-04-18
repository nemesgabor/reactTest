import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { name: "Test 1", age: 32},
      { name: "Test 2", age: 34},
      { name: "Test 3", age: 36}            
    ]
  }
  switchNameHandler = () => {
    //console.log('Clicked');
    // this.state.persons[0].name = "Test qwe"; DONT
    this.setState({persons:[
        { name: "Test 1", age: 32},
        { name: "Test 2", age: 34},
        { name: "Test 3", age: 21}            
      ]
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, React app here.</h1>
        <p>Test text</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} >My hobbies: Racing</Person>        
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
        
      </div>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, React app here'))
  }
}

export default App;
