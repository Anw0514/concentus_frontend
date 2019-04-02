import React, { Component } from 'react'
import PageCardFront from '../Cards/PageCardFront'
import PageCardBack from "../Cards/PageCardBack";

class PageIndex extends Component {
    render() {
        return (
            <div>
                PageIndex
                <PageCardFront />
                <PageCardBack />
                <br />
            </div>
        )
    }
}

export default PageIndex