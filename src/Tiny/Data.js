import React, {Component} from 'react'
import { Container, Header, Label } from 'semantic-ui-react'

class Data extends Component {
    // !!! make tags clickable to filter the results by pages that include that tag
    render() {
        return (
          <div>
            <Container>
                <Header as="h4" floated="left">Links: </Header>
                {this.props.page.links.map(link => {
                    return (
                        <Label as="a" color="teal" tag>
                    {link}
                    </Label>
                )})}
            </Container>
            <br />
            <Container>
                <Header as="h4" floated="left">Genres: </Header>
                {this.props.page.genres.map(genre => {
                    return (
                        <Label color="teal" tag>
                    {genre}
                    </Label>
                )})}
            </Container>
            <br />
            <Container>
                <Header as="h4" floated="left">Looking For: </Header>
                {this.props.page.looking_for.map(looking_for => {
                return (
                    <Label color="teal" tag >
                    {looking_for}
                    </Label>
                )})}
            </Container>
            
          </div>
        );
    }
}

export default Data