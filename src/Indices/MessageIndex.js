import React, { Component } from "react";
import { Segment } from "semantic-ui-react";
import MessageCard from "../Cards/MessageCard";

class MessageIndex extends Component {
  
  constructor(){
      super()
      this.state = {
          ppl: []
      }
  }

  componentDidMount() {
    let ppl = []
    console.log(this.props.messages)
    if (this.props.messages) {
      for (const person in this.props.messages) {
        ppl.push({name: person, messages: this.props.messages[person].map(msg => msg.content)})
      }
    }
    this.setState({ppl})
  }

  render() {
    return (
        <div>
          {this.state.ppl.map(person => {
            return <MessageCard name={person.name} message={person.messages[person.messages.length - 1]} />
          })}
        </div>
    );
  }
}

export default MessageIndex;
