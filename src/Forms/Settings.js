import React, { Component } from 'react'
import { Segment, Message, Dropdown, Input } from "semantic-ui-react";
import ImageUploader from "react-images-upload";

class Settings extends Component {
    render() {
        return (
            <Segment>
                <Input
                    icon="user circle"
                    iconPosition="left"
                    placeholder="Full Name"
                    className="login field"
                    onChange={() => {}}
                    size="large"
                />
                <Input
                    icon="lock"
                    type="password"
                    iconPosition="left"
                    placeholder="Password"
                    className="login field"
                    onChange={() => {}}
                    size="large"
                />
                <Input
                    icon="lock"
                    type="password"
                    iconPosition="left"
                    placeholder="Re-Enter Password"
                    className="login field"
                    onChange={() => {}}
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
                    onChange={() => {}}
                    size="large"
                />
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose Profile Photo'
                    onChange={() => {}}
                    imgExtension={['.jpg', '.png']}
                    maxFileSize={5242880}
                />
                <div
                    className="login field button"
                    onClick={() => {}}
                >
                    <h3>Submit</h3>
                </div>
            </Segment>
        );
    }
}

export default Settings