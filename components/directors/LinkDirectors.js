import Link from 'next/link'
import React, { Component } from 'react'

export default class extends Component {
	constructor (props) {
		super(props)
		this.state = {
			menuOpen: false,
			isReady: false,
			props: props
		}
	}

	hoverLinks = (url) => {
		document.getElementById('video').innerHTML = '<video class="link-directors__video"  playsInline autoPlay muted loop><source src=' + url+ '></source></video>';
	}

	render = () => {
		// JSX
		return (
			<Link key={this.state.props.content.id} as={`/directors/${this.state.props.content.slug}/${this.state.props.content.id}`} href={`/directors?id=${this.state.props.content.id}`}>
				<a className="link-directors__item-container"
				   onMouseOver={() => this.hoverLinks(this.state.props.content.videoMp4 !== 'default' ? this.state.props.content.videoMp4.url : '-')}>
					<span className="link-directors--visible">
						{this.state.props.children}
					</span>
					<span className="link-directors--title">
						{this.state.props.children}
					</span>
					<span className="link-directors__separator">/</span>
				</a>
			</Link>
		)
	}
}

