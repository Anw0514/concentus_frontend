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
      redirect: false
    };
  }

  handleChangeName = (e, { value }) => {
    this.setState({ name: value });
  }

  handleChangeZip = (e) => {
    this.setState({ zip: parseInt(e.target.value) });
  }

  handleChangeType = (e, { value }) => {
    this.setState({ type: value });
  }

  handleSubmitForm = () => {
    // !!! change user id to be fluid
    this.props.addPage(this.state.type, this.state.name, this.state.zip);
    this.setState({
      redirect: true
    })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to="/mypages" />
    }

    return (
      <Segment>
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Name"
              placeholder="First name"
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
          <Form.TextArea label="Bio" placeholder="Tell us more about you..." />
          <Form.Button onClick={() => this.handleSubmitForm()}>Submit</Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default PageForm