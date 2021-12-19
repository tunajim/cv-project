import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import "../styles/contact-nav.css";
import email from "../images/email.png";
import phone from "../images/smartphone.png";
import nav from "../images/navigation.png";
import linkedIn from "../images/linkedin.png";
import ContactLink from "./sub-components/ContactLink";

class ContactBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clicked: false,
    };
  }

  handleClick = (e) => {
    this.setState({
      clicked: true,
    });
  };

  render() {
    return (
      <Router>
        <div className="contact-div">
          <navBar className="contact-nav">
            <ContactLink type="email" img={email} placeHolder="janedoe@gmail.com" complete={this.props.complete}/>
            <ContactLink type="tel" img={phone} placeHolder="123-456-7890" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"complete={this.props.complete}/>
            <ContactLink type="nav" img={nav} placeHolder="Portland, Oregon" complete={this.props.complete}/>
            <ContactLink type="url" img={linkedIn} placeHolder="https://linkedin.com/in/jane.doe" value="https://" complete={this.props.complete}/>
          </navBar>
        </div>
      </Router>
    );
  }
}

export default ContactBar;
