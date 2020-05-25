import React, { Component } from 'react'
import Link from 'next/link';

export default class SocialShare extends Component {
	constructor (props) {
		super (props);    
	}

	render () {
		return (
			<div className="social-links__container">
				<div className="social-links__title">
					Share:
				</div>
				
				<Link href={'https://www.instagram.com/?url=http://api.brut.works/images/projects/_blockOneItem_big_desktop_extra_big/frame_Brut.jpg' + window.location.href}>
					<a className="social-links__item" target="_blank">Ins.</a>
				</Link>
				
				<Link href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href}>
					<a className="social-links__item" target="_blank">Fb.</a>
				</Link>

				{/* <Link href={'https://twitter.com/home?status=' + window.location.href}>
					<a className="social-links__item" target="_blank">Twitter.</a>
				</Link> */}

				<Link href={'https://www.linkedin.com/shareArticle?mini=true&url=' + window.location.href}>
					<a className="social-links__item" target="_blank">Lkn.</a>
				</Link>

				{/* <Link href={'https://plus.google.com/share?url=' + window.location.href}>
					<a className="social-links__item" target="_blank">Google+.</a>
				</Link> */}
			</div>
		)
	}
}