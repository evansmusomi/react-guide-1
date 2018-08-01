import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [{ name: "Evans", age: 28 }, { name: "Musomi", age: 26 }]
  };

  switchNameHandler = () => {
    this.setState({
      persons: [{ name: "Evanso", age: 29 }, { name: "Musoms", age: 25 }]
    });
  };
  
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
    
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <button style={style} onClick={this.switchNameHandler}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler}
          changed={this.nameChangedHandler}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        />
      </div>
    );
  }
}

export default App;
