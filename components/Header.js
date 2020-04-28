import React, { Component } from 'react'
import Menu from './Menu'


export default class extends Component {
    constructor(props) {
        super(props)


    }

    render = () => {
        return (
            <React.Fragment>
                <Menu handle={this.props.handle}/>
            </React.Fragment>
        )
    }
}


