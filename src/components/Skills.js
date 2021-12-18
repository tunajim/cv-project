import React, { Component } from "react";
import "../styles/experience.css";

class Skills extends Component {
  constructor(props) {
    super(props);

    this.state = {
      components: ["skills"],
    };
  }

  _addComponent = (e) => {
    this.setState({
      components: this.state.components.concat("sample component"),
    });
  };

  render() {
    return (
      <div className="skills-container">
        <h3>Skills</h3>
        {this.state.components.map((elem) => (
          <p>hello world</p>
        ))}
        <button onClick={this._addComponent}>Add Component</button>
      </div>
    );
  }
}

export default Skills;
