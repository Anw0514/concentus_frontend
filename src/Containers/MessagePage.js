import React, { Component } from "react";
import { Segment, Header, Feed, Image } from 'semantic-ui-react'

class MessagePage extends Component {

  render() {
    const { name, avatar, email, messages } = this.props.user
    return (
        <Segment>
            <Header as='h1' textAlign='center'>
                <Image circular src={avatar} />
            <Header.Content>
                {name}
                <Header.Subheader>{email}</Header.Subheader>
            </Header.Content>
            </Header>
            {messages ? 
          <Feed size='small' className='message index small'>
                {messages.slice().reverse().map(msg => {
                    let sender = name;
                    let img = avatar
                    if (msg.sent === true) { sender = this.props.me.name; img = this.props.me.avatar }
                    return (
                      <Feed.Event>
                        <Feed.Label image={img} />
                        <Feed.Content>
                        <Feed.Summary>{sender}</Feed.Summary>
                        <Feed.Extra text>{msg.content}</Feed.Extra>
                        </Feed.Content>
                      </Feed.Event>
                    );
                })}
            </Feed>
            : null}
        </Segment>
    );
  }
}

export default MessagePage;
