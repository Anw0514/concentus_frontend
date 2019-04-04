import React, {Component} from 'react'
import Data from '../Tiny/Data'
import { Card, Placeholder } from 'semantic-ui-react'

class PageCardFront extends Component {
    // gets props page, toBack
    render() {
        return(
            <Card>
                <Card.Content>
                    <Card.Header>{this.props.page.name}</Card.Header>
                    <Card.Meta>{this.props.page.model}</Card.Meta>
                    <Placeholder style={{ width: "100%", paddingTop: "70%" }}>
                        <Placeholder.Image />
                    </Placeholder>
                    <Card.Description>{this.props.page.bio}</Card.Description>
                    {JSON.stringify(this.props.page)}
                    <Data page={this.props.page} />
                </Card.Content>
            </Card>
        )
    }
}

export default PageCardFront