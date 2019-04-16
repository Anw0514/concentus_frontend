import React, { Component } from "react";
import { Feed, Icon } from "semantic-ui-react";

class MessageCard extends Component {
  render() {
    return (
      <Feed.Event>
      <Feed.Label>
        <img src='https://fortunedotcom.files.wordpress.com/2019/01/boo.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          <Feed.User className='teal text' onClick={() => {}}>{this.props.name}</Feed.User>
        </Feed.Summary>
        <Feed.Meta>
            {this.props.sent ? <Icon name='reply'/> : null}
          {this.props.message}
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>
    );
  }
}

export default MessageCard;
