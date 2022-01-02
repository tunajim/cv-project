import React, { Component } from "react";
import add from "../images/addComponent.png";

class AddComponentButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <button onClick={this.props.click} className={this.props.class}>
        <img src={add} className="add-img"></img>
      </button>
    );
  }
}

export default AddComponentButton;
