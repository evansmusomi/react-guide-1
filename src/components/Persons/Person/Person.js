import React, { Component } from "react";
import PropTypes from "prop-types";

import classes from "./Person.css";
import WithClass from "../../../hoc/WithClass";

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
      <WithClass classes={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age}
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          value={this.props.name}
          onChange={this.props.changed}
        />
      </WithClass>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
};

export default Person;
