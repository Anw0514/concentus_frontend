import React, { Component } from 'react'
import { Segment, Message, Dropdown, Input } from 'semantic-ui-react'

class EmailCheck extends Component {
    render() {
        const domains = ["@gmail.com", "@yahoo.com", "@aol.com", "@att.net", "@comcast.net", "@facebook.com", "@gmx.com", "@googlemail.com",
            "@google.com", "@hotmail.com", "@mac.com", "@me.com", "@mail.com", "@msn.com",
            "@live.com", "@sbcglobal.net", "@verizon.net"]
        const options = domains.map(domain => { return { key: domain, text: domain, value: domain } })
        return (
            <Segment className="login container">
                <Input
                    icon="mail outline"
                    iconPosition="left"
                    placeholder="Email"
                    className="login field"
                    onChange={this.props.handleEmailChange}
                    size="large"
                    labelPosition='right'
                    label={(
                        <Dropdown search defaultValue='@gmail.com' options={options} onChange={this.props.handleDomainChange} />
                    )}
                />
                {this.props.error ? (
                    <Message
                        error
                        header="Registration Failed"
                        content="An account already exists with that email"
                    />
                ) : null}
                <div
                    className="login field button"
                    onClick={this.props.handleEmailCheck}
                >
                    <h3>Next</h3>
                </div>
            </Segment>
        )
    }
}

export default EmailCheck