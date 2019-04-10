import React, { Component } from "react";
import { Segment, Form } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom'

class PageForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      zip: null,
      type: "",
      bio: "",
      file: "",
      redirect: false
    };
  }

  componentDidMount(){
    if (this.props.page.model) {
      const page = this.props.page
      this.setState({
        name: page.name,
        zip: page.zip,
        type: page.model.toLowerCase() + 's',
        bio: page.bio
      })
    }
  }

  handleChangeName = (e, { value }) => {
    this.setState({ name: value });
  };

  handleChangeBio = (e, { value }) => {
    this.setState({ bio: value });
  };

  handleChangeZip = e => {
    this.setState({ zip: parseInt(e.target.value) });
  };

  handleChangeType = (e, { value }) => {
    this.setState({ type: value });
  };

  handleChangeFile = (e) => {
    this.setState({ file: e.target.value });
  };

  handleSubmitForm = (e) => {
    // !!! change user id to be fluid
    if (this.props.page.model) {
      this.props.updatePage(
        this.state.type,
        this.state.name,
        this.state.zip,
        this.state.bio,
        this.state.file
      );
    } else {
      this.props.addPage(
        this.state.type,
        this.state.name,
        this.state.zip,
        this.state.bio,
        this.state.file
      );
    }
    // !!! fix the bug that makes it not hit the redirect on the first click
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/mypages" />;
    }

    return (
      <Segment className="form">
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Display Name"
              value={this.state.name}
              onChange={this.handleChangeName}
            />
            <Form.Field
              fluid
              label="Zip"
              control="input"
              type="number"
              placeholder="Zip Code"
              max={100000}
              min={10000}
              value={this.state.zip}
              onChange={this.handleChangeZip}
            />
            <Form.Field
              fluid
              label="Profile Photo"
              control="input"
              type="file"
              placeholder="Choose a file"
              onChange={this.handleChangeFile}
            />
          </Form.Group>
          <Form.Group inline>
            <label>Type</label>
            <Form.Radio
              label="Musician"
              value="musicians"
              checked={this.state.type === "musicians"}
              onChange={this.handleChangeType}
            />
            <Form.Radio
              label="Venue"
              value="venues"
              checked={this.state.type === "venues"}
              onChange={this.handleChangeType}
            />
            <Form.Radio
              label="Band"
              value="bands"
              checked={this.state.type === "bands"}
              onChange={this.handleChangeType}
            />
          </Form.Group>
          <Form.TextArea
            label="Bio"
            placeholder="Tell us more about you..."
            value={this.state.bio}
            onChange={this.handleChangeBio}
          />
          <Form.Button onClick={this.handleSubmitForm}>
            Submit
          </Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default PageForm