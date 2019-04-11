import React, {Component} from 'react'
import Data from '../Tiny/Data'
import { Button, Card, Placeholder } from 'semantic-ui-react'

class PageCardFront extends Component {
    render() {
        return (
          <Card fluid color="teal">
            <Card.Content>
              <Card.Header>{this.props.page.name}</Card.Header>
              <Card.Meta>{this.props.page.model}</Card.Meta>
              <Placeholder style={{ width: "100%", paddingTop: "70%" }}>
                <Placeholder.Image />
              </Placeholder>
              <Data page={this.props.page} /><br/>
              <Button basic color="teal" content="More Info" onClick={() => this.props.toBack(this.props.page)} />
            </Card.Content>
          </Card>
        );
    }
}

export default PageCardFront