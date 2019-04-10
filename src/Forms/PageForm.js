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

  addTidbit = (tidbit) => {
    let name = tidbit.group + "s";
    if (tidbit.group === 'looking for') {
      name = 'lookings'
    }
    console.log(tidbit)
    if (this.state[name] && this.state[name].length !== 0) {
      this.setState({
        [name]: [tidbit, ...this.state[name]]
      })
    } else if (this.state[name]){
      this.setState({
        [name]: [tidbit]
      });
    }
  }

  removeTidbit = (name, group) => {
    if (group === 'Skills') {
      this.setState({
        skills: this.state.skills.filter(skill => skill.value !== name)
      })
    } else if (group === 'Genres') {
      this.setState({
        genres: this.state.genres.filter(genre => genre.value !== name)
      });
    } else if (group === 'Discovery') {
      this.setState({
        links: this.state.links.filter(link => link.value !== name)
      });
    } else if (group === 'Links') {
      this.setState({
        lookings: this.state.lookings.filter(looking => looking.value !== name)
      });
    }
  }

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
          <Divider />
          <Tidbit
            add={this.addTidbit}
            remove={this.removeTidbit}
            type={this.state.type}
            skills={this.state.skills}
            lookings={this.state.lookings}
            genres={this.state.genres}
            links={this.state.links}
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