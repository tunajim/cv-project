import React, { Component } from "react";
import remove from "../../images/remove.png";

class RemoveButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
        src={remove}
        className={this.props.class}
        onClick={this.props.click}
        alt={this.props.alt}
      ></img>
    );
  }
}

export default RemoveButton;
