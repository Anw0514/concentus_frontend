import React, { Component } from 'react'
import PageCardFront from '../Cards/PageCardFront'
import PageCardBack from "../Cards/PageCardBack";
import {Card} from 'semantic-ui-react'

class PageIndex extends Component {

    constructor() {
        super()
        this.state = {
            pageBack: {}
        }
    }

    handleToBack = (page) => {
        this.setState({
            pageBack: page
        })
    }

    render() {
        return (
          <div>
            <Card.Group centered>
              {this.props.pages.map(page => {
                return page === this.state.pageBack ? (
                  <PageCardBack page={this.state.pageBack} toBack={this.handleToBack} />
                ) : (
                  <PageCardFront page={page} toBack={this.handleToBack} />
                );
              })}
            </Card.Group>
          </div>
        );
    }
}

export default PageIndex