import React, { Component } from "react";
import { LinkContainer } from "react-router-bootstrap";
import LoaderButton from "../components/LoaderButton";
import "./Account.css";

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div className="Account">
        <LinkContainer to="/account/email">
          <LoaderButton
            block
            bsSize="large"
          >
            Change Email
          </LoaderButton>
        </LinkContainer>
        <LinkContainer to="/account/password">
          <LoaderButton
            block
            bsSize="large"
          >
            Change Password
          </LoaderButton>
        </LinkContainer>
      </div>
    );
  }
}