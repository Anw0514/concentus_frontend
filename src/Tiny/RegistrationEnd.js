import React, { Component } from 'react'
import { Segment, Message, Dropdown, Input } from "semantic-ui-react";
import ImageUploader from "react-images-upload";

class RegistrationEnd extends Component {
  // !!! add name field
    render() {
        return (
          <Segment className="login container">
            <Input
              icon="user circle"
              iconPosition="left"
              placeholder="Full Name"
              className="login field"
              onChange={this.props.nameChange}
              size="large"
            />
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
            <ImageUploader
              withIcon={true}
              buttonText='Choose Profile Photo'
              onChange={this.props.imageChange}
              imgExtension={['.jpg', '.png']}
              maxFileSize={5242880}
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