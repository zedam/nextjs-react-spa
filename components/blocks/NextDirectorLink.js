import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

class NextDirectorLink extends React.Component {
	constructor (props) {
		super (props);
	}

	updateLink = () => {
		document.getElementById ('header3-content').style.opacity = 0;
	}

	componentWillUpdate = () => {
		setTimeout(() => {
			document.getElementById ('header3-content').style.opacity = 1;
		}, 500);
	}

	render () {
		return (

			<React.Fragment>
				<Fade bottom>
					<div onClick={() => this.updateLink ()}>
						<Link as={`/directors/${this.props.content.slug}/${this.props.content.id}`}
							  href={`/directors?id=${this.props.content.id}`}>

							<a className="next-to">
								{this.props.content.title} >
							</a>
						</Link>
					</div>
				</Fade>

			</React.Fragment>
		)
	}
}

export default NextDirectorLink
