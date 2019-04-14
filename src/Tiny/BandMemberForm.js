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
      fetch("http://localhost:3000/musicians").then(resp => resp.json())
      .then(musicians => {
          const mObj = musicians.map(musician => ({key: musician.id, text: musician.name, value: musician}))
          this.setState({
              musList: mObj
          })
      })
  }

  addMusician = (value) => {
      // post new ghost musician with the name given and add to state
      fetch("http://localhost:3000/ghost_musicians", {
          method: 'POST',
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
              name: value
          })
      }).then(resp => resp.json())
      .then(ghost => {
          this.setState({
              musList: [{ key: ghost.id, text: ghost.name, value: ghost }, ...this.state.musList] 
          })
          this.props.changeMusician(ghost);
      })
  }

  render() {
      return (
        <Form.Group inline fluid>
          <label>Add Members: </label>
          <Form.Select
            search
            options={this.state.musList}
            allowAdditions
            clearable
            additionLabel="Add Musician: "
            placeholder="Find or Add a Musician"
            onChange={(e, { value }) => this.props.changeMusician(value)}
            onAddItem={(e, { value }) => this.addMusician(value)}
            value={this.props.musician}
          />
          <Form.Input
            placeholder="What is their role?"
            onChange={(e, { value }) => this.props.changeRole(value)}
            value={this.props.role}
          />
          <button onClick={this.props.btn} className="ui teal basic button">Add Member</button>
        </Form.Group>
      );
  }
}

export default BandMemberForm;
