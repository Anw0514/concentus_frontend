import React, { Component } from "react";
import { Segment, Form } from 'semantic-ui-react';

class PageForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      zip: 20000,
      type: ""
    };
  }

  handleChangeName = (e, { value }) => {
    this.setState({ name: value });
  }

  handleChangeZip = (e) => {
    this.setState({ zip: e.target.value });
  }

  handleChangeType = (e, { value }) => {
    this.setState({ type: value });
  }

  render() {
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
              value="Musician"
              checked={this.state.type === "Musician"}
              onChange={this.handleChangeType}
            />
            <Form.Radio
              label="Venue"
              value="Venue"
              checked={this.state.type === "Venue"}
              onChange={this.handleChangeType}
            />
            <Form.Radio
              label="Band"
              value="Band"
              checked={this.state.type === "Band"}
              onChange={this.handleChangeType}
            />
          </Form.Group>
          <Form.TextArea label="Bio" placeholder="Tell us more about you..." />
          <Form.Button>Submit</Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default PageForm