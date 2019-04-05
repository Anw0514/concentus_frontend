import React, {Component} from 'react'
import { Label } from 'semantic-ui-react'

class Data extends Component {

    render() {
        return (
          <div>
            <h4>Links: </h4>
            {this.props.page.links.map(link => {
              return (
                <Label as="a" color="teal" tag>
                  {link}
                </Label>
            )})}
            <h4>Genres: </h4>
            {this.props.page.genres.map(genre => {
              return (
                <Label as="a" color="teal" tag>
                  {genre}
                </Label>
            )})}
            <h4>Looking For: </h4>
            {this.props.page.looking_for.map(looking_for => {
              return (
                <Label as='a' color="teal" tag >
                  {looking_for}
                </Label>
            )})}
            
          </div>
        );
    }
}

export default Data