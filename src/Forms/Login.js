import React, { Component } from "react";
import { Segment, Input, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      signUp: false
    };
  }

  handleEmailChange = (e, { value }) => {
    this.setState({
      email: value
    });
  };

  handlePasswordChange = (e, { value }) => {
    this.setState({
      password: value
    });
  };

  handleSignUpClick = () => {
    this.setState({
      signUp: true
    })
  }

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="four wide column">
          <Segment className="login container">
            <Input
              icon="user"
              iconPosition="left"
              placeholder="Email"
              className="login field"
              onChange={this.handleEmailChange}
              size="large"
              />
            <Input
              icon="lock"
              type="password"
              iconPosition="left"
              placeholder="Password"
              className="login field"
              onChange={this.handlePasswordChange}
              size="large"
              />
            {this.props.error ? (
              <Message
              error
              header="Login Failed"
              content="The email or password is incorrect"
              />
              ) : null}
            <div
              className="login field button"
              onClick={() =>
                this.props.handleLogin(
                  this.state.email,
                  this.state.password
                )
              }
            >
              <h3>Submit</h3>
            </div>
          </Segment>
          <div className="ui message login container">
            New Here?{" "}
            <Link to='/signup' className="link">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
      );
  }
}

export default Login;
