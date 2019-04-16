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
                {messages.map(msg => {
                    return (
                      <Feed.Event>
                        <Feed.Label image="https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg" />
                        <Feed.Content content={msg.content} />
                      </Feed.Event>
                    );
                })}
            </Feed>
        </Segment>
    );
  }
}

export default MessagePage;
