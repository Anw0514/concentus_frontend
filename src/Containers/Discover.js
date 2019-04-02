import React, { Component } from "react";
import PageIndex from "../Indexes/PageIndex";
import SearchBar from '../Navigation/SearchBar'

class Discover extends Component {
    render() {
        return (
            <div>
                <strong>Discover</strong>
                <SearchBar />
                <br />
                <PageIndex />
            </div>
        )
    }
}

export default Discover