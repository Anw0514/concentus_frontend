import React, { Component } from "react";
import { Form } from 'semantic-ui-react'

class BandMemberForm extends Component {

  
  constructor() {
      super()
      this.state = {
          musList: []
      }
  }

  componentDidMount() {
      // fetch all musicians to return an obj of {name, id} & set the state
  }

  addMusician() {
      // post new ghost musician with the name given and add to state
  }


  render() {
      return (<Form.Group inline fluid>
          <label>Add Members: </label>
          <Form.Select
              search
              options={this.state.musList}
              allowAdditions
              clearable
              additionLabel='Add Musician'
              placeholder="Find or Add a Musician"
              onChange={this.handleChangeFile}
          />
          <Form.Input
              placeholder="What is their role?"
              onChange={this.handleChangeFile}
          />
      </Form.Group>)
  }
}

export default BandMemberForm;
