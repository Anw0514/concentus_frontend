import React, { Component } from "react";
import { Segment, Form, Divider } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom'
import Tidbit from "../Tiny/Tidbits";

class PageForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      zip: null,
      type: "",
      bio: "",
      file: "",
      redirect: false,
      skills: [],
      links: [],
      lookings: [],
      genres: []
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

  addTidbit = (value, group) => {
    if (typeof value[value.length - 1] !== 'string'){
      this.setState({
        [group]: value
      })
    }
    console.log(value, group)
  }

  handleSubmitForm = (e) => {
    const { type, name, zip, bio, file, links, lookings, genres, skills } = this.state

    // !!! change user id to be fluid
    const tidbits = skills.concat(links, lookings, genres)

    // debugger

    if (this.props.page.model) {
      this.props.updatePage(
        type,
        name,
        zip,
        bio,
        file,
        tidbits
      );
    } else {
      this.props.addPage(
        type,
        name,
        zip,
        bio,
        file,
        tidbits
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
          <Divider />
          <Tidbit
            add={this.addTidbit}
            skills={this.state.skills}
            links={this.state.links}
            genres={this.state.genres}
            lookings={this.state.lookings}
            type={this.state.type}
          />
          <Divider />
          <Form.TextArea
            label="Bio"
            placeholder="Tell us more about you..."
            value={this.state.bio}
            onChange={this.handleChangeBio}
          />
          <Form.Button onClick={this.handleSubmitForm}>Submit</Form.Button>
        </Form>
      </Segment>
    );
  }
}

export default PageForm