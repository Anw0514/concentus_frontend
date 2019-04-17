import React, { Component, Fragment } from "react";
import MessageCard from "../Cards/MessageCard";
import { Feed, Grid, Segment, Header, Image } from "semantic-ui-react";
import MessagePage from "../Containers/MessagePage";
import MessageForm from "../Forms/MessageForm";

class MessageIndex extends Component {
  
  render() {
    return (
      <Grid relaxed='very' columns={12} centered>
      <Grid.Row stretched >
        <Grid.Column width={6}>
        <Feed size='large' className='message index'>
            {this.props.conversations.map(convo => {
                let message = convo.messages[0].content.slice(-50)
                if (message.length > 49) {
                message = message + '...'
                }
                return (
                <MessageCard
                    name={convo.name}
                    message={message}
                    selectUser={this.props.selectUser}
                    sent={convo.messages[0].sent}
                    user={convo}
                />
                );
            })}
        </Feed>
        </Grid.Column>
        <Grid.Column width={6}>
        {this.props.selectedUser ?
        <MessagePage user={this.props.selectedUser} me={this.props.user}/>
        : null}
        <MessageForm submit={this.props.sendMessage} />
        </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default MessageIndex;
