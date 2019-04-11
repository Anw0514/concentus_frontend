import React, { Component } from 'react'
import { Segment, Message, Dropdown, Input } from "semantic-ui-react";

class RegistrationEnd extends Component {
  // !!! add first and last name fields, make last optional
    render() {
        return (
          <Segment className="login container">
            <Input
              icon="lock"
              type="password"
              iconPosition="left"
              placeholder="Password"
              className="login field"
              onChange={this.props.passwordChange}
              size="large"
            />
            <Input
              icon="lock"
              type="password"
              iconPosition="left"
              placeholder="Re-Enter Password"
              className="login field"
              onChange={this.props.passwordCheck}
              size="large"
            />
            {this.props.error ? (
              <Message
                error
                header="Passwords Don't Match"
                content="Please make sure your password entries match."
              />
            ) : null}
            <Input
              icon="map marker alternate"
              type="number"
              iconPosition="left"
              placeholder="Zip Code"
              className="login field"
              max={99950}
              min={501}
              onChange={this.props.zipChange}
              size="large"
            />
            <Input
              icon="location arrow"
              type="number"
              iconPosition="left"
              placeholder="Max distance for connections"
              className="login field"
              min={10}
              onChange={this.props.distanceChange}
              size="large"
              labelPosition="right"
              label={
                <Dropdown
                  defaultValue="mi"
                  onChange={this.props.distanceTypeChange}
                  options={[
                    { key: "mi", text: "mi", value: "mi" },
                    { key: "km", text: "km", value: "km" }
                  ]}
                />
              }
            />
            <div
              className="login field button"
              onClick={this.props.signUp}
            >
              <h3>Submit</h3>
            </div>
          </Segment>
        );
    }
}

export default RegistrationEnd