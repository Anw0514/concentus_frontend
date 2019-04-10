import React, { Component } from 'react'
import { Container, Message, Dropdown, Input, Label } from "semantic-ui-react";

class Tidbit extends Component {

    constructor(){
        super()
        this.state = {

        }
    }

    render() {
        const options = [
            { key: 'English', text: 'English', value: 'English' },
            { key: 'French', text: 'French', value: 'French' },
            { key: 'Spanish', text: 'Spanish', value: 'Spanish' },
            { key: 'German', text: 'German', value: 'German' },
            { key: 'Chinese', text: 'Chinese', value: 'Chinese' },
        ]
        return (
          <Container className='tidbit container'>
            <label className='tidbit label'>Skills</label>
            <Dropdown
              options={options}
              placeholder="Choose or Add Skills"
              search
              selection
              fluid
              clearable
              multiple
              allowAdditions
            />
            <label className='tidbit label'>Genres</label>
            <Dropdown
              options={options}
              placeholder="Choose or Add Genres"
              search
              selection
              fluid
              clearable
              multiple
              allowAdditions
            />
            <label className='tidbit label'>Discovery</label>
            <Dropdown
              options={options}
              placeholder="Choose or Add Who You're Looking For"
              search
              selection
              fluid
              clearable
              multiple
              allowAdditions
            />
            <label className='tidbit label'>Links</label>
            <Dropdown
              options={options}
              placeholder="Add Links"
              search
              selection
              fluid
              clearable
              multiple
              allowAdditions
            />
          </Container>
        );
    }
}

export default Tidbit