import React, {Component} from 'react'
import Data from '../Tiny/Data'
import { Button, Card, Placeholder } from 'semantic-ui-react'

class PageCardFront extends Component {

    render() {
      const page = this.props.page
        return (
          <Card fluid color="teal">
            <Card.Content>
              <Card.Header>{page.name}</Card.Header>
              <Card.Meta>{page.model}</Card.Meta>
              <Placeholder style={{ width: "100%", paddingTop: "70%" }}>
                <Placeholder.Image />
              </Placeholder>
              <Data
                page={page}
                lookings={page.looking_for}
              />
            </Card.Content>
            <Card.Content extra>
              <Button
                basic
                color="teal"
                content="More Info"
                onClick={() => this.props.toBack(page)}
              />
            </Card.Content>
          </Card>
        );
    }
}

export default PageCardFront