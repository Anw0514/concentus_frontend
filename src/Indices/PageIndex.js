import React, { Component } from 'react'
import PageCardFront from '../Cards/PageCardFront'
import PageCardBack from "../Cards/PageCardBack";
import {Card, Icon} from 'semantic-ui-react'
import { Link, Redirect } from 'react-router-dom'

class PageIndex extends Component {

    constructor() {
        super()
        this.state = {
            pageBack: {}
        }
    }

    handleToBack = (page) => {
      // changes card rendered to be front/back
        this.setState({
            pageBack: page
        })
    }

    render() {
        if (this.props.shouldLeave) {
          return <Redirect to="/create" />;
        }

        return (
          <Card.Group itemsPerRow={5} className="card-container">
            {this.props.pages.map(page => {
              return page === this.state.pageBack ? (
                <PageCardBack
                  page={this.state.pageBack}
                  toBack={this.handleToBack}
                  removePage={this.props.removePage}
                  editPage={this.props.editPage}
                  notMine={this.props.discover}
                />
              ) : (
                <PageCardFront page={page} toBack={this.handleToBack} />
              );
            })}
            {this.props.discover ? null : (
              <Card fluid color="teal">
                <Card.Content>
                  <Card.Header>Add A Page</Card.Header>
                  <Link to="/create">
                    <Icon name="plus" size="massive" color="teal" />
                  </Link>
                </Card.Content>
              </Card>
            )}
          </Card.Group>
        );
    }
}

export default PageIndex