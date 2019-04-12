import React, {Component} from 'react'
import { Container, Header, Label } from 'semantic-ui-react'
import Tidbit from './Tidbit'

class Data extends Component {
    // !!! make tags clickable to filter the results by pages that include that tag
    render() {
        const { genres, lookings, skills, links } = this.props
        // return <div>{`${!!genres}, ${!!lookings}, ${!!skills}, ${!!links}`}</div>
        return (
          <div>
            {genres && genres[0] ? 
            <Container>
                <Header as="h4" floated="left">Genres: </Header>
                <Tidbit collection={genres} />
            </Container>
            : null}
            <br />
            {skills && skills[0] ? 
            <Container>
                <Header as="h4" floated="left">Skills: </Header>
                <Tidbit collection={skills} />
            </Container>
            : null}
            {lookings && lookings[0] ? 
            <Container>
                <Header as="h4" floated="left">Looking For: </Header>
                <Tidbit collection={lookings} />
            </Container>
            : null}
            {links && links[0] ? 
            <Container>
                <Header as="h4" floated="left">Links: </Header>
                <Tidbit collection={links} />
            </Container>
            : null}
            
          </div>
        );
    }
}

export default Data