import React, { Component } from 'react'
import { Segment, Message, Image, Header, Input, Grid } from "semantic-ui-react";
import ImageUploader from "react-images-upload";

class Settings extends Component {

    constructor() {
        super()
        this.state = {
            name: '',
            email: '',
            distance: '',
            zip: null,
            img: ''
        }
    }

    changeName = (e, { value }) => {
        this.setState({
            name: value
        })
    }

    changeEmail = (e, { value }) => {
        this.setState({
            email: value
        })
    }

    changeDis = (e, { value }) => {
        this.setState({
            distance: value
        })
    }

    changeImg = (e, { value }) => {
        this.setState({
            img: value
        })
    }

    changeZip = (e, { value }) => {
        this.setState({
            img: value
        })
    }

    render() {
        const { name, avatar, email} = this.props.user;
        return (
        <Grid relaxed='very' columns={12} centered>
        <Grid.Row stretched>
        <Grid.Column width='6'>
            <Segment>
                <label>Full Name</label>
                <Input
                    icon="user circle"
                    iconPosition="left"
                    placeholder="Full Name"
                    className="login field"
                    onChange={this.changeName}
                    value={this.state.name}
                    size="large"
                    />
                <label>Email Address</label>
                <Input
                    icon="mail"
                    iconPosition="left"
                    className="login field"
                    placeholder="Email Address"
                    onChange={this.changeEmail}
                    value={this.state.email}
                    size="large"
                    />
                <label>Distance</label>
                <Input
                    icon="location arrow"
                    iconPosition="left"
                    placeholder="Distance"
                    className="login field"
                    onChange={this.changeDis}
                    value={this.state.distance}
                    size="large"
                    />
                <label>Zip Code</label>
                <Input
                    icon="map marker alternate"
                    type="number"
                    iconPosition="left"
                    placeholder="Zip Code"
                    className="login field"
                    max={99950}
                    min={501}
                    onChange={this.changeZip}
                    value={this.state.zip}
                    size="large"
                    />
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose Profile Photo'
                    onChange={this.changeImg}
                    value={this.state.img}
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