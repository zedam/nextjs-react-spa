import React, { Component, Fragment } from 'react'
import Link from 'next/link'

class LinkItem extends React.Component {
    constructor(props) {
        super(props)
    }

    render () {
	    const id = this.props.content.linkedArticle && this.props.content.linkedArticle.length > 0 ? this.props.content.linkedArticle[0].id : this.props.content.handle;
	    const handle = this.props.content.linkedArticle && this.props.content.linkedArticle.length > 0 ? this.props.content.linkedArticle[0].handle : this.props.content.id;
	    const linked = this.props.content.linkedArticle && this.props.content.linkedArticle.length > 0 ? this.props.content.linkedArticle[0].uri : `/${this.props.content.handle}/${this.props.content.slug}/${this.props.content.id}`;
	    return (
        	<Fragment>
	        <Link as={linked} href={`/${handle}?id=${id}`}>
                {this.props.children}
            </Link>
	        </Fragment>
        )
    }
}

export default LinkItem;
