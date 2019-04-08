import React, { Component } from "react";
import PageIndex from "../Indices/PageIndex";
import SearchBar from '../Navigation/SearchBar'

class Discover extends Component {

    constructor() {
        super()
        this.state = {
            searchTerm: '',
            pageType: ''
        }
    }

    render() {
        return (
            <div className='pageDiv'>
                <strong>Discover</strong>
                <SearchBar searchTerm={this.state.searchTerm} type={this.state.pageType} />
                <br />
                <PageIndex pages={this.props.pages} discover={true} />
            </div>
        )
    }
}

export default Discover