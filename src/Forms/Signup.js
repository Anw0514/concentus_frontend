import React, { Component } from "react";
import { Link } from 'react-router-dom'
import EmailCheck from '../Tiny/EmailCheck'
import RegistrationEnd from '../Tiny/RegistrationEnd'

class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      domain: "@gmail.com",
      password: "",
      name: "",
      zip: 20000,
      distance: 10,
      distanceType: "mi",
      step: 1,
      error: false
    };
  }

  handleEmailChange = (e, { value }) => {
    // callback for EmailCheck
    this.setState({
      email: value
    });
  };

  handleDomainChange = (e, { value }) => {
    // callback for EmailCheck
    this.setState({
      domain: value
    });
  };

  handlePasswordChange = (e, { value }) => {
    // callback for RegistrationEnd
    this.setState({
      password: value
    });
  };

  handlePasswordCheck = (e, { value }) => {
    // callback for RegistrationEnd
    if (this.state.password !== value) {
        this.setState({
            error: true
        })
    } else (
        this.setState({
            error: false
        })
    )
  };
  
  handleZipChange = (e, { value }) => {
        // callback for RegistrationEnd
        this.setState({
            zip: value
        });
    };
    
    handleDistanceChange = (e, { value }) => {
        // callback for RegistrationEnd
        this.setState({
            distance: value
        });
    };
    
    handleTypeChange = (e, { value }) => {
        // callback for RegistrationEnd
        this.setState({
            DistanceType: value
        });
    };
    
    handleEmailCheck = () => {
        // checks if the email entered has already been taken
        if (this.state.email) {
            fetch("http://localhost:3000/email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    email: this.state.email + this.state.domain
                })
            })
            .then(resp => resp.json())
            .then(status => {
                if (status.error) {
                    this.setState({
                        error: true
                    });
                } else {
                    this.setState({
                        step: 2,
                        error: false
                    });
                }
            });
        }
    };

    handleSignUpClick = () => {
        // callback for RegistrationEnd
        this.props.handleRegister(this.state)
    };

  render() {
    return (
      <div className="ui middle aligned center aligned grid">
        <div className="five wide column">
          {this.state.step == 1 ? (
            <EmailCheck
              error={this.state.error}
              handleDomainChange={this.handleDomainChange}
              handleEmailChange={this.handleEmailChange}
              handleEmailCheck={this.handleEmailCheck}
            />
          ) : (
            <RegistrationEnd
              error={this.state.error}
              passwordChange={this.handlePasswordChange}
              passwordCheck={this.handlePasswordCheck}
              zipChange={this.handleZipChange}
              distanceChange={this.handleDistanceChange}
              distanceTypeChange={this.handleTypeChange}
              signUp={this.handleSignUpClick}
            />
          )}
          <div className="ui message SignUp container">
            Have an account?{" "}
            <Link to="/login" className="link">
              Log In
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
