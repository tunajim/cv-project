import React, { Component } from "react";
import PersonalInfoComponent from "./Personal-info-component";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

class ContactLink extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
      placeHolder: this.props.placeHolder,
    };
  }

  _handleClick = (e) => {
    e.preventDefault();
    this.setState({
      clicked: true,
    });
  };

  _handleChange = (e) => {
    this.setState({
      placeHolder: e.target.value,
    });
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    if (this.placeHolder === "") {
      this.setState({
        placeHolder: "must make valid entry",
      });
    } else {
      this.setState({
        clicked: false,
      })
    }
  };

  _onBlur = (e) => {
    e.preventDefault();
    this.setState({
      clicked: false,
    })
  }

  render() {
    return (() => {
      if (!this.state.clicked) {
        return (
          <div className="link">
            <img
              className="img"
              src={this.props.img}
              alt={this.props.type}
            ></img>
            <Link to="#" onDoubleClick={this._handleClick}>
              {this.state.placeHolder}
            </Link>
          </div>
        );
      } else {
        return (
          <div className="link">
            <img
              className="img"
              src={this.props.img}
              alt={this.props.type}
            ></img>
            <form onSubmit={this._handleSubmit}>
              <input
                type={this.props.type}
                pattern={this.props.pattern}  
                onChange={this._handleChange}
                onBlur={this._onBlur}
                defaultValue={this.props.value}
                autoFocus
                required
              ></input>
            </form>
          </div>
        );
      }
    })();
  }
}

export default ContactLink;
