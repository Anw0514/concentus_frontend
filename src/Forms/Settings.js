import React, { Component } from 'react'
import { Segment, Message, Image, Header, Input, Grid } from "semantic-ui-react";
import ImageUploader from "react-images-upload";

class Settings extends Component {
    render() {
        const { name, avatar, email} = this.props.user;
        return (
        <Grid relaxed='very' columns={12} centered>
        <Grid.Row stretched>
        <Grid.Column width='6'>
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
        </Grid.Column>
        <Grid.Column width='6'>
            <Segment>
                <Header as='h1' textAlign='center'>
                    <Image circular src={avatar} />
                    <Header.Content>
                    {name}
                    <Header.Subheader>{email}</Header.Subheader>
                    </Header.Content>
                </Header>
            </Segment>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        );
    }
}

export default Settings