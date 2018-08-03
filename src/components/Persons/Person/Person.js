import React, { Component } from "react";
import classes from "./Person.css";

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Constructor");
  }

  componentWillMount() {
    console.log("[Person.js] Will Mount");
  }

  componentDidMount() {
    console.log("[Person.js] Did Mount");
  }

  render() {
    console.log("[Person.js] Render");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </div>
    );
  }
}

export default Person;
