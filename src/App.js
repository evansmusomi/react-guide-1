import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <Person name="Evans" age="28" />
        <Person name="Musomi" age="26">
          Hobbies: Anime
        </Person>
      </div>
    );
  }
}

export default App;
