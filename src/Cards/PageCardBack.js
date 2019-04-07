import React, { Component } from 'react'
import { Button, Card } from 'semantic-ui-react'

class PageCardBack extends Component {

    render() {
        return (
          <Card>
            <Card.Content>
              <Card.Header>{this.props.page.name}</Card.Header>
              <Card.Meta>{this.props.page.model}</Card.Meta>
              <Card.Description>{this.props.page.bio}</Card.Description>
              <Button
                basic
                color="teal"
                content="Back To front"
                onClick={() => this.props.toBack({})}
              />
              <Button
                basic
                color="teal"
                content="Edit"
                onClick={() => this.props.removePage(this.props.page)}
              />
              <Button
                basic
                color="teal"
                content="Delete"
                onClick={() => this.props.removePage(this.props.page)}
              />
            </Card.Content>
          </Card>
        );
    }
}

export default PageCardBack