import React, { Component } from 'react'
import PageCardFront from '../Cards/PageCardFront'
import PageCardBack from "../Cards/PageCardBack";

class PageIndex extends Component {

    constructor() {
        super()
        this.state = {
            pageBack: {}
        }
    }

    render() {
        return (
            <div>
                PageIndex
                {this.props.pages.map(page => {
                    return page === this.state.pageBack ?
                    <PageCardBack page={page} /> :
                    <PageCardFront page={page} />
                })}
                <br />
            </div>
        )
    }
}

export default PageIndex