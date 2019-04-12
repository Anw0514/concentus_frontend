import React, { Component } from "react";
import { Segment, Form, Divider } from 'semantic-ui-react';
import {Redirect} from 'react-router-dom'
import TidbitForm from "../Tiny/TidbitForm";

class PageForm extends Component {
  // !!! add vlidations to make sure all fields are correct and male last name optional
  constructor() {
    super();
    this.state = {
      name: "",
      zip: null,
      type: "",
      bio: "",
      file: "",
      address: '',
      redirect: false,
      skills: [],
      links: [],
      lookings: [],
      genres: [],
      linkList: []
    };
  }

  componentDidMount(){
    // checks to see if there is a page passed to decide if the form will be for edit or create
    const page = this.props.page
    if (page.model) {
      let skills = []
      if (page.model === 'Musician') {
        skills = page.skills.map(skill => skill.id)
      }
      let links = page.links.map(link => link.id);
      let linkList = page.links.map(link => ({ key: link.id, text: link.value, value: link.id}))
      let genres = page.genres.map(genre => genre.id);
      let lookings = page.looking_for.map(looking => looking.id);
      this.setState({
        name: page.name,
        zip: page.zip,
        type: page.model.toLowerCase() + 's',
        bio: page.bio,
        skills,
        links,
        lookings,
        genres,
        linkList
      })
    }
  }

  handleChangeName = (e, { value }) => {
    // changes name input value
    this.setState({ name: value });
  };

  handleChangeBio = (e, { value }) => {
    // changes bio input value
    this.setState({ bio: value });
  };

  handleChangeZip = e => {
    // changes zip code input value
    this.setState({ zip: parseInt(e.target.value) });
  };

  handleChangeType = (e, { value }) => {
    // changes type selection value
    this.setState({ type: value });
  };

  handleChangeFile = (e) => {
    // changes file selection value
    this.setState({ file: e.target.value });
  };

  addTidbit = (value, group) => {
    // callback for Tidbit that changes the value of the input dropdowns on change
    if (typeof value[value.length - 1] !== 'string'){
      this.setState({
        [group]: value
      })
    }
  }

  handleSubmitForm = (e) => {
    // calls the parent function to fetch and redirects to /mypages
    const { type, name, zip, bio, file, links, lookings, genres, skills, address } = this.state

    const tidbits = skills.concat(links, lookings, genres)

    if (this.props.page.model) {
      this.props.updatePage(
        type,
        name,
        zip,
        bio,
        file,
        tidbits,
        address
      );
    } else {
      this.props.addPage(
        type,
        name,
        zip,
        bio,
        file,
        tidbits,
        address
      );
    }
  };

  render() {
    if (this.props.redirect) {
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
          <TidbitForm
            add={this.addTidbit}
            skills={this.state.skills}
            links={this.state.links}
            genres={this.state.genres}
            lookings={this.state.lookings}
            type={this.state.type}
            linkList={this.state.linkList}
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