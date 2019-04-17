import React, { Component } from "react";
import PageIndex from "../Indices/PageIndex";
import SearchBar from '../Navigation/SearchBar'
import {Redirect} from 'react-router-dom'

class Discover extends Component {

    constructor() {
        super()
        this.state = {
            searchTerm: '',
            pages: [],
            typePages: [],
            type: 'All',
            results: [],
            genre: false
        }
    }

    componentDidMount() {
        if (this.props.pages) {
            this.setState({
                pages: this.props.pages,
                results: this.props.pages,
                typePages: this.props.pages
            })
        }
    }

    handleSearchTypeChange = () => {
        this.setState({
            genre: !this.state.genre
        })
    }

    handleSearchChange = (term, pages) => {
        if (!pages) {
            pages = this.state.typePages
        }
        let results = []
        this.state.genre ?
        results = pages.filter(page => (
            !!page.genres.find(genre => genre.value.toLowerCase().includes(term))
        )) : (
        results = pages.filter(page => page.name.toLowerCase().includes(term))
        );
        this.setState({ results, searchTerm: term })
    }
    
    handlePageTypeChange = (type) => {
        let typePages;
        if (type === 'All') {
            typePages = this.state.pages
        } else {
            typePages = this.state.pages.filter(page => (
                page.model === type
            ))
        }
        this.setState({ typePages, type }, this.handleSearchChange(this.state.searchTerm, typePages))
    }

    render() {

        if (this.props.redirect) {
            return < Redirect to = "/messages" />;
        }

        return (
          <div className="pageDiv">
            <SearchBar
              searchTerm={this.state.searchTerm}
              genre={this.state.genre}
              changeSearchType={this.handleSearchTypeChange}
              changeType={this.handlePageTypeChange}
              changeSearch={this.handleSearchChange}
              type={this.state.type}
            />
            <br />
            <PageIndex
              pages={this.state.results}
              selectUser={this.props.selectUser}
              discover={true}
            />
          </div>
        );
    }
}

export default Discover