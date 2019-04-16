import React, { Component, Fragment } from "react";
import MessageCard from "../Cards/MessageCard";
import { Feed, Grid, Segment, Header, Image } from "semantic-ui-react";
import MessagePage from "../Containers/MessagePage";

class MessageIndex extends Component {
  
  constructor(){
      super()
      this.state = {
          conversations: [],
          selectedUser: null
      }
  }

  componentDidMount() {
    if (this.props.conversations) {
      this.setState({
        conversations: this.props.conversations
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
                    user={convo}
                />
                );
            })}
            </Feed>
        </Segment>
        </Grid.Column>
        <Grid.Column width={6}>
        {this.state.selectedUser ?
        <MessagePage user={this.state.selectedUser}/>
        : null}
        </Grid.Column>
      </Grid>
    );
  }
}

export default MessageIndex;
