import React, { Component } from "react";
import PageIndex from "../Indices/PageIndex";
import SearchBar from '../Navigation/SearchBar'

class Discover extends Component {

    constructor() {
        super()
        this.state = {
            searchTerm: '',
            pages: [],
            typePages: [],
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

    handleSearchChange = (term) => {
        let pages = this.state.typePages
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
        let typePages = this.state.pages.filter(page => (
            page.model === type
        ))
        this.setState({ typePages }, this.handleSearchChange(this.state.searchTerm))
    }

    render() {
        return (
            <div className='pageDiv'>
                <SearchBar 
                    searchTerm={this.state.searchTerm}
                    genre={this.state.genre}
                    changeType={this.handleSearchTypeChange} 
                    changeSearch={this.handleSearchChange}
                />
                <br />
                <PageIndex pages={this.state.results} discover={true} />
            </div>
        )
    }
}

export default Discover