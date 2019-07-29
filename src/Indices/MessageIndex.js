import React, { Component, Fragment } from "react";
import MessageCard from "../Cards/MessageCard";
import { Feed, Grid, Segment, Header, Image } from "semantic-ui-react";
import MessagePage from "../Containers/MessagePage";
import MessageForm from "../Forms/MessageForm";

class MessageIndex extends Component {
  
  render() {

    const user = this.props.selectedUser

    return (
      <Grid relaxed='very' columns={12} centered>
      <Grid.Row stretched >
        <Grid.Column width={user ? 6 : 8}>
        <Feed size='large' className='message index'>
            {this.props.conversations.map(convo => {
                let message = convo.messages[0].content.slice(0, 50)
                if (message.length > 49) {
                message = message + '...'
                }
                return (
                  <MessageCard
                    name={convo.name}
                    avatar={convo.avatar}
                    message={message}
                    selectUser={this.props.selectUser}
                    sent={convo.messages[0].sent}
                    user={convo}
                  />
                );
            })}
        </Feed>
        </Grid.Column>
        {user ?
        <Grid.Column width={6}>
        <Fragment>
        <MessagePage user={user} me={this.props.user}/>
        <MessageForm submit={this.props.sendMessage} />
        </Fragment>
        </Grid.Column>
        : null}
        </Grid.Row>
      </Grid>
    );
  }
}

export default MessageIndex;
