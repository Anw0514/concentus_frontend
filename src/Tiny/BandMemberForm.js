import React, { Component, Fragment } from "react";
import { Form, List, Button } from 'semantic-ui-react'

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
        <Fragment>
          <Form.Group inline fluid>
            <label>Add Members: </label>
            <Form.Select
              search
              options={this.state.musList}
              allowAdditions
              clearable
              additionLabel="Add Musician: "
              placeholder="Find or Add a Musician"
              onChange={(e, { value }) =>
                this.props.changeMusician(value)
              }
              onAddItem={(e, { value }) => this.addMusician(value)}
              value={this.props.musician}
            />
            <Form.Input
              placeholder="What is their role?"
              onChange={(e, { value }) => this.props.changeRole(value)}
              value={this.props.role}
            />
            <button
              onClick={this.props.btn}
              className="ui teal basic button"
            >
              Add Member
            </button>
          </Form.Group>
          {this.props.members && this.props.members[0] ? (
            <List divided horizontal verticalAlign="middle" size='small'>
              {this.props.members.map(member => (
                <List.Item>
                  <List.Content floated="right">
                    <Button basic circular color="teal" icon="x" size='mini' />
                  </List.Content>
                  <List.Header>{member.name}</List.Header>
                  <List.Content>{member.role}</List.Content>
                </List.Item>
              ))}
            </List>
          ) : null}
        </Fragment>
      );
  }
}

export default BandMemberForm;
