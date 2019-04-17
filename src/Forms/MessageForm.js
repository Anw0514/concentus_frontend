import React, { Component } from 'react'
import { Segment, Form, Button, TextArea } from 'semantic-ui-react';

class MessageForm extends Component {
    render() {
        return (
          <Segment>
            <Form>
              <Form.Field
                id="form-textarea-control"
                control={TextArea}
                label="Message"
                placeholder="Type out your message here..."
              />
              <Button type="submit">Submit</Button>
            </Form>
          </Segment>
        );
    }
}

export default MessageForm