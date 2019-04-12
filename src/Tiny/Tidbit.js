import React, { Component, Fragment } from 'react'
import { Label } from "semantic-ui-react";

class Tidbit extends Component {
    render() {
        return (
            <Fragment>
                {this.props.collection.map(item => {
                    return (
                        <Label color="teal" tag>
                            {item}
                        </Label>
                    )
                })}
            </Fragment>
        )
    }
}

export default Tidbit