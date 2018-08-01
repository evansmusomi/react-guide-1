import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ id: "ajk2", name: "Evans", age: 28 }, { id: "9lkd", name: "Musomi", age: 26 }],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  
  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };
    
    let persons = null;
    if(this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person 
              key={person.id}
              name={person.name} 
              age={person.age} 
              click={() => this.deletePersonHandler(index)} />
          })}
        </div>
      )
    }
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        { persons }
      </div>
    );
  }
}

export default App;
