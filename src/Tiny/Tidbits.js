import React, { Component } from 'react'
import { Segment, Message, Dropdown, Input } from "semantic-ui-react";

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
            <Segment>
                <Dropdown
                    options={options}
                    placeholder='Choose Language'
                    search
                    selection
                    fluid
                    clearable
                    multiple
                    allowAdditions
                />
            </Segment>
        )
    }
}

export default Tidbit