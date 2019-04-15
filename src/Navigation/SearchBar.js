import React, {Component, Fragment} from 'react'
import { Container, Checkbox, Input, Radio } from 'semantic-ui-react';

class SearchBar extends Component {
    render() {
        return (
          <Fragment>
            <Container fluid className="searchBar">
              <strong>Search By: &nbsp;&nbsp;</strong>
              Name&nbsp;&nbsp;
              <Checkbox
                slider
                onClick={this.props.changeSearchType}
                checked={this.props.genre}
              />
              &nbsp;&nbsp; Genre &nbsp;&nbsp;
              <Input
                size="small"
                icon="search"
                placeholder="Search..."
                onChange={(e, {value}) => this.props.changeSearch(value.toLowerCase())}
                value={this.props.searchTerm}
              />
            </Container>
            <br />
            <Container fluid className="searchBar">
              <strong>Filter&nbsp;&nbsp;</strong>
              <Radio
                label="Musicians"
                value="Musician"
                checked={this.props.type === "Musician"}
                onClick={(e, {value}) => this.props.changeType(value)}
              />&nbsp;&nbsp;
              <Radio
                label="Venues"
                value="Venue"
                checked={this.props.type === "Venue"}
                onClick={(e, {value}) => this.props.changeType(value)}
              />&nbsp;&nbsp;
              <Radio
                label="Bands"
                value="Band"
                checked={this.props.type === "Band"}
                onClick={(e, {value}) => this.props.changeType(value)}
              />&nbsp;&nbsp;
              <Radio
                label="All"
                value="All"
                checked={this.props.type === "All"}
                onClick={(e, {value}) => this.props.changeType(value)}
              />
            </Container>
            <br />
          </Fragment>
        );
    }
}

export default SearchBar