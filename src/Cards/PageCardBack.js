import React, { Component, Fragment } from 'react'
import { Button, Card, Icon } from 'semantic-ui-react'
import Data from "../Tiny/Data";

class PageCardBack extends Component {

    render() {
        return (
          <Card fluid color="teal">
            <Card.Content>
              <Card.Header>{this.props.page.name}</Card.Header>
              <Card.Meta>{this.props.page.model}</Card.Meta>
              <Card.Description>{this.props.page.bio}</Card.Description>
              <Data
                page={this.props.page}
                links={this.props.page.links}
                genres={this.props.page.genres}
                skills={this.props.page.skills}
              />
            </Card.Content>
            <Card.Content extra>
              <Icon
                name="arrow alternate circle left outline"
                size="big"
                color="teal"
                onClick={() => this.props.toBack({})}
              />
              {this.props.notMine ? null : (
                <Fragment>
                  <Button
                    basic
                    color="teal"
                    content="Edit"
                    onClick={() => this.props.editPage(this.props.page)}
                  />
                  <Button
                    basic
                    color="teal"
                    content="Delete"
                    onClick={() => {
                      console.log(this);
                      this.props.removePage(this.props.page);
                    }}
                  />
                </Fragment>
              )}
            </Card.Content>
          </Card>
        );
    }
}

export default PageCardBack