import React, { Component } from 'react'
import Link from 'next/link'

class LinkItem extends React.Component {
    constructor(props) {
        super(props)
    }
    
    render () {
        return (
            <Link as={`/${this.props.content.handle}/${this.props.content.slug}/${this.props.content.id}`} href={`/${this.props.content.handle}?id=${this.props.content.id}`}>
                {this.props.children}
            </Link>
        )
    }
}

export default LinkItem;
