import React, { Component } from 'react';
import classes from './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      { id:'1', name: "Test 1", age: 32},
      { id:'2',name: "Test 2", age: 34},
      { id:'3',name: "Test 3", age: 36}            
    ],
    ohterState: 'some other value',
    showPersons: false
  }
  
  nameChangedHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }
    person.name = event.target.value;
    const persons =  [...this.state.persons];
    persons[personIndex] = person;
    this.setState({persons:persons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons})
  }

  togglePersonsHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState({showPersons: !doesShow})
  }

  render() {
    
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              click = {() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed = {(event) => this.nameChangedHandler(event,person.id)}/>
          })}
          
        </div>
      );
      btnClass = classes.Red;
    }

    const assignedClasses = [];

    if(this.state.persons.length <=2) {
      assignedClasses.push(classes.red);
    }
    if(this.state.persons.length <=1){
      assignedClasses.push(classes.bold);
    }


    return (
        <div className={classes.App}>
          <h1>Hi, React app here.</h1>
          <p className={assignedClasses.join(' ')}>Test text</p>
          <button 
            className={btnClass}
            onClick={this.togglePersonsHandler}>
            Show/hide people
          </button>
          {persons}
        </div>
    );
    // return React.createElement('div',{className:'App'}, React.createElement('h1',null,'Hi, React app here'))
  }
}

export default App;
