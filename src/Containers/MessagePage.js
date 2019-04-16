import React, { Component } from "react";
import { Segment, Header, Feed, Image } from 'semantic-ui-react'

class MessagePage extends Component {

  render() {
    const { name, avatar, email, messages } = this.props.user
    return (
        <Segment>
            <Header as='h1' textAlign='center'>
                <Image circular src='https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg' />
            <Header.Content>
                {name}
                <Header.Subheader>{email}</Header.Subheader>
            </Header.Content>
            </Header>
            <Feed size='large'>
                {messages.reverse().map(msg => {
                    let sender = name;
                    if (msg.sent === true) { sender = this.props.me.name }
                    return (
                      <Feed.Event>
                        <Feed.Label image="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" />
                        <Feed.Content>
                        <Feed.Summary>{sender}</Feed.Summary>
                        <Feed.Extra text>{msg.content}</Feed.Extra>
                        </Feed.Content>
                      </Feed.Event>
                    );
                })}
            </Feed>
        </Segment>
    );
  }
}

export default MessagePage;
