import React, {Component, Fragment} from 'react'
import { Container, Checkbox, Input } from 'semantic-ui-react';

class SearchBar extends Component {
    render() {
        return (
          <Fragment>
            <Container fluid className="searchBar">
              <strong>Search By: &nbsp;&nbsp;</strong>
              Name&nbsp;&nbsp;
              <Checkbox
                slider
                onClick={this.props.changeType}
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
          </Fragment>
        );
    }
}

export default SearchBar