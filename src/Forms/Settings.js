import React, { Component } from 'react'
import { Segment, Message, Image, Header, Input, Grid, Label, Icon } from "semantic-ui-react";
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

    componentDidMount() {
        if (this.props.user) {
            const { name, avatar, distance, email, zip } = this.props.user
            this.setState({
                name,
                email,
                distance,
                zip,
                img: avatar
            })
        }
    }

    saved() {
        const { name, email, distance, zip, avatar } = this.props.user
        return (name === this.state.name &&
                email === this.state.email &&
                distance === this.state.distance &&
                zip === this.state.zip &&
                avatar === this.state.img)
    }

    changeName = (e, { value }) => {
        this.setState({
            name: value
        })
        this.saved()
    }

    changeEmail = (e, { value }) => {
        this.setState({
            email: value
        })
        this.saved()
    }

    changeDis = (e, { value }) => {
        this.setState({
            distance: value
        })
        this.saved()
    }

    changeImg = (file, picUrls) => {
        const img = picUrls.slice(-1)[0];
        this.setState({ img })
        this.saved()
    }

    changeZip = (e, { value }) => {
        this.setState({
            zip: value
        })
        this.saved()
    }

    render() {
        const { name, img, zip, email, distance } = this.state ;
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
                    value={name}
                    size="large"
                    />
                <label>Email Address</label>
                <Input
                    icon="mail"
                    iconPosition="left"
                    className="login field"
                    placeholder="Email Address"
                    onChange={this.changeEmail}
                    value={email}
                    size="large"
                    />
                {/* <label>Distance</label>
                <Input
                    icon="location arrow"
                    iconPosition="left"
                    placeholder="Distance"
                    className="login field"
                    onChange={this.changeDis}
                    value={distance}
                    size="large"
                    /> */}
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
                    value={zip}
                    size="large"
                    />
                <ImageUploader
                    withIcon={true}
                    buttonText='Choose Profile Photo'
                    onChange={this.changeImg}
                    value={img}
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
            <Segment textAlign='center'>
                <Image circular src={img} size='medium' centered />
                <Header as='h1' textAlign='center'>
                    <Header.Content>
                    {name}
                    <Header.Subheader>{email} | {zip}</Header.Subheader>
                    </Header.Content>
                </Header>
            { this.saved() ? 
                <Label color='teal' content="Saved" icon="check circle outline" />
            :   <Label content="Unsaved" />}
            </Segment>
        </Grid.Column>
        </Grid.Row>
        </Grid>
        );
    }
}

export default Settings