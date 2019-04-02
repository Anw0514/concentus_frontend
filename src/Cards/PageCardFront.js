import React, {Component} from 'react'
import Data from '../Tiny/Data'

class PageCardFront extends Component {
    render() {
        return(
            <div>
                PageCardFront
                <Data page={this.props.page} />
            </div>
        )
    }
}

export default PageCardFront