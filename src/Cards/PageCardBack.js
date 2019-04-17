import React, { Component, Fragment } from 'react'
import { Button, Card, Icon, List } from 'semantic-ui-react'
import Data from "../Tiny/Data";

class PageCardBack extends Component {

    render() {
      const page = this.props.page
        return (
          <Card fluid color="teal">
            <Card.Content>
              <Card.Header>{page.name}</Card.Header>
              <Card.Meta>Created by: {page.user.name}</Card.Meta>
              <Card.Description>{page.bio}</Card.Description>
              <Data
                page={page}
                links={page.links}
                genres={page.genres}
                skills={page.skills}
              />
              {page.model === 'Band' ?
              <List>{ page.members.map(mem => 
                (<List.Item>
                <List.Header>{mem.member.name}</List.Header>
                  {mem.role}
                </List.Item>)
              )}
              </List> : null}
            </Card.Content>
            <Card.Content extra>
              <Icon
                name="arrow alternate circle left outline"
                size="big"
                color="teal"
                onClick={() => this.props.toBack({})}
              />
              {this.props.notMine ? (
                <Button
                  basic
                  color="teal"
                  content="Send Message"
                  onClick={() => this.props.selectUser(page.user)}
                />
              ) : (
                <Fragment>
                  <Button
                    basic
                    color="teal"
                    content="Edit"
                    onClick={() => this.props.editPage(page)}
                  />
                  <Button
                    basic
                    color="teal"
                    content="Delete"
                    onClick={() => {
                      console.log(this);
                      this.props.removePage(page);
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