import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

class MessageCard extends Component {
  render() {
    return (
      <Segment stacked>
        <h1>{this.props.name}</h1>
        <p>{this.props.message}</p>
      </Segment>
    );
  }
}

export default MessageCard;
