import React, { Component, Fragment } from "react";
import MessageCard from "../Cards/MessageCard";
import { Feed, Grid, Segment, Header, Image } from "semantic-ui-react";

class MessageIndex extends Component {
  
  constructor(){
      super()
      this.state = {
          conversations: []
      }
  }

  componentDidMount() {
    if (this.props.conversations) {
      this.setState({
        conversations: this.props.conversations,
        selectedUser: this.props.user
      })
    }
  }
  
  handleSelectUser = (user) => {
    this.setState({
        selectedUser: user
    })
  }

  render() {
    return (
      <Grid relaxed='very' columns={12} centered>
        <Grid.Column width={6}>
        <Segment className='message index'>
            <Feed size='large'>
            {this.state.conversations.map(convo => {
                let message = convo.messages[0].content.slice(-50)
                if (message.length > 49) {
                message = message + '...'
                }
                return (
                <MessageCard
                    name={convo.name}
                    message={message}
                    selectUser={this.handleSelectUser}
                    sent={convo.messages[0].sent}
                    user={this.state.selectedUser}
                />
                );
            })}
            </Feed>
        </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
        <Segment>
            <Header as='h1' textAlign='center'>
                <Image circular src='https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg' />
            </Header>
            {/* <Feed size='large'>
            {this.state.selectedUser.messages.map(convo => {
                let message = convo.messages[convo.messages.length - 1].slice(-50)
                if (message.length > 50) {
                message = convo.messages[convo.messages.length - 1].slice(-50) + '...'
                }
                return (
                <MessageCard
                    name={convo.name}
                    message={message}
                />
                );
            })}
            </Feed> */}
        </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default MessageIndex;
