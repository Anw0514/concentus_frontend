import React, {Component} from 'react'
import { Container, Header, Label } from 'semantic-ui-react'
import Tidbit from './Tidbit'

class Data extends Component {
    // !!! make tags clickable to filter the results by pages that include that tag
    render() {
        let { genres, lookings, skills, links } = this.props
        // return <div>{`${!!genres}, ${!!lookings}, ${!!skills}, ${!!links}`}</div>
        genres && genres[0] ? genres = genres.map(genre => genre.value) : genres = null
        lookings && lookings[0] ? lookings = lookings.map(looking => looking.value) : lookings = null
        skills && skills[0] ? skills = skills.map(skill => skill.value) : skills = null
        links && links[0] ? links = links.map(link => link.value) : links = null
        return (
          <div>
            {genres ? 
            <Container className='tag-holder'>
                <Header as="h4" floated="left">Genres: </Header>
                <Tidbit collection={genres} />
            </Container>
            : null}
            {skills ? 
            <Container className='tag-holder'>
                <Header as="h4" floated="left">Skills: </Header>
                <Tidbit collection={skills} />
            </Container>
            : null}
            {lookings ? 
            <Container className='tag-holder'>
                <Header as="h4" floated="left">Looking For: </Header>
                <Tidbit collection={lookings} />
            </Container>
            : null}
            {links ? 
            <Container className='tag-holder'>
                <Header as="h4" floated="left">Links: </Header>
                <Tidbit collection={links} />
            </Container>
            : null}
          </div>
        );
    }
}

export default Data