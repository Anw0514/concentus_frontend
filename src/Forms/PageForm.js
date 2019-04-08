import React, { Component } from "react";
import { Segment, Form } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom'

class PageForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      zip: 20000,
      type: "",
      bio: "",
      file: "",
      redirect: false
    };
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.page.model) {
      const page = nextProps.page
      this.setState({
        name: page.name,
        zip: page.zip,
        type: page.model.toLowerCase + 's',
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

  handleSubmitForm = () => {
    // !!! change user id to be fluid
    this.props.addPage(
      this.state.type,
      this.state.name,
      this.state.zip,
      this.state.bio,
      this.state.file
    );
    this.setState({
      redirect: true
    });
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/mypages" />;
    }

    return (
      <Segment className='form'>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="Display Name"
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
            <label>Size</label>
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
            onChange={this.handleChangeBio}
          />
          <Form.Button onClick={() => this.handleSubmitForm()}>
            Submit
          </Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default PageForm