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

    handleToBack() {

    }

    render() {
        return (
          <div>
            <Card.Group centered>
              {this.props.pages.map(page => {
                return page === this.state.pageBack ? (
                  <PageCardBack page={page} />
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