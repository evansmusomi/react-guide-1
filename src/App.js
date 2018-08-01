import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Evans", age: 28 }, { name: "Musomi", age: 26 }],
    showPersons: false
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow })
  }
  
  nameChangedHandler = (event) => {
    this.setState({
      persons: [{ name: event.target.value, age: 28 }, { name: "Musomi", age: 26 }]
    });
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
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
          />
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
