import React, { Component } from 'react'
import Menu from './Menu'


export default class extends Component {
    constructor(props) {
        super(props)


    }

    render = () => {
        return (
            <div>
                <Menu handle={this.props.handle}/>
            </div>
        )
    }
}


