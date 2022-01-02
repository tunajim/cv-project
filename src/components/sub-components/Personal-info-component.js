import React, { Component } from "react";
import "../../styles/personal-info.css";

class PersonalInfoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      type: this.props.type,
      placeHolder: this.props.placeHolder,
      elemType: this.props.elemType,
    };

    console.log(this.state.elemType);
  }

  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      clicked: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      placeHolder: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.placeHolder === "") {
      this.setState({
        placeHolder: "Must make valid entry",
      });
    }
    this.setState({
      clicked: false,
    });
  };

  handleBlur = (e) => {
    this.setState({
      clicked: false,
    });
  };
  render() {
    const holder = this.state.placeHolder;
    const className = this.props.type;
    return (() => {
      if (!this.props.complete) {
        if (!this.state.clicked) {
          return (
            <this.props.elemType
              onDoubleClick={this.handleClick}
              className={className}
            >
              {holder}
            </this.props.elemType>
          );
        } else {
          return (
            <form className={className} onSubmit={this.handleSubmit}>
              <input
                type="text"
                className={className}
                onChange={this.handleChange}
                autoFocus
                onBlur={this.handleBlur}
              ></input>
            </form>
          );
        }
      } else {
        return (
          <this.props.elemType className={className}>
            {holder}
          </this.props.elemType>
        );
      }
    })();
  }
}

export default PersonalInfoComponent;
