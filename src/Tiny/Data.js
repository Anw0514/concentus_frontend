import React, {Component} from 'react'
import { Container, Header, Label } from 'semantic-ui-react'

class Data extends Component {
    // !!! make tags clickable to filter the results by pages that include that tag
    render() {
        const { genres, lookings, skills, links } = this.props
        return <div>{`${!!genres}, ${!!lookings}, ${!!skills}, ${!!links}`}</div>
        // return (
        //   <div>
        //     <Container>
        //         <Header as="h4" floated="left">Links: </Header>
        //         {links.map(link => {
        //             return (
        //                 <Label color="teal" tag>
        //             {link}
        //             </Label>
        //         )})}
        //     </Container>
        //     <br />
        //     <Container>
        //         <Header as="h4" floated="left">Genres: </Header>
        //         {genres.map(genre => {
        //             return (
        //                 <Label color="teal" tag>
        //             {genre}
        //             </Label>
        //         )})}
        //     </Container>
        //     <br />

        //     <Container>
        //         <Header as="h4" floated="left">Looking For: </Header>
        //         {lookings.map(looking_for => {
        //         return (
        //             <Label color="teal" tag >
        //             {looking_for}
        //             </Label>
        //         )})}
        //     </Container>
            
        //   </div>
        // );
    }
}

export default Data