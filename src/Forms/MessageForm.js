import React, { Component } from 'react'
import { Segment, Form, Button, TextArea } from 'semantic-ui-react';

class MessageForm extends Component {

    constructor(){
        super()
        this.state = {
            message: ''
        }
    }

    handleSubmit = () => {
        this.props.submit(this.state.message);
        this.setState({
            message: ''
        })
    }

    handleMessageChange = (e, { value }) => {
        this.setState({
            message: value
        })
    }

    render() {
        return (
          <Segment>
            <Form onSubmit={this.handleSubmit} >
              <Form.Field
                id="form-textarea-control"
                control={TextArea}
                label="Message"
                placeholder="Type out your message here..."
                value={this.state.message}
                onChange={this.handleMessageChange}
              />
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        );
    }
}

export default MessageForm