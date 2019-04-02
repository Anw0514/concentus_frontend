import React, { Component } from "react";
import PageIndex from "../Indexes/PageIndex";
import SearchBar from '../Navigation/SearchBar'

class Discover extends Component {

    constructor() {
        super()
        this.state = {
            pages: [],
            searchTerm: '',
            pageType: ''
        }
    }

    render() {
        return (
            <div>
                <strong>Discover</strong>
                <SearchBar searchTerm={this.state.searchTerm} type={this.state.pageType} />
                <br />
                <PageIndex pages={this.state.pages} />
            </div>
        )
    }
}

export default Discover