import React, { Component } from "react";
import remove from "../../images/remove.png";
import RemoveButton from "./RemoveButton";

class SkillsComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "Javascript",
      clicked: false,
    };
  }

  _handleClick = (e) => {
    e.target.parentNode.remove();
  };

  _toggleClicked = (e) => {
    this.setState({
      clicked: true,
    });
  };

  _updateValue = (e) => {
    this.setState({
        value: e.target.value,
    });
  };

  _handleSubmit = (e) => {
      this.setState({
          clicked: false,
      })
  }

  render() {
    return (
      <div className="skill-tag">
        {!this.props.complete ? (
          <RemoveButton click={this._handleClick} alt="remove" class="remove-skill-button"/>
        ) : null}
        {!this.state.clicked ? (
          <p onDoubleClick={this._toggleClicked}>{this.state.value}</p>
        ) : (
          <form onSubmit={this._handleSubmit} >
            <input className="skill-input" onChange={this._updateValue} onBlur={this._handleSubmit} autoFocus></input>
          </form>
        )}
      </div>
    );
  }
}

export default SkillsComponent;
