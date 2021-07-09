import Link from 'next/link';
import React, { Component } from 'react'
import Reveal from 'react-reveal/Reveal'


export default class SocialFollow extends Component {
	constructor (props) {
		super (props);
	}

	render () {
		return (

			<React.Fragment>
				<div className="social-follow__container--wrapper">
					{/*{this.props.entry &&
					<div className="social-follow__title">
						{this.props.entry}
					</div>
					}*/}
					{/*{!this.props.entry &&
					}*/}

					<div className="social-follow__title">
						Follow
					</div>

					<div className="social-follow__container--layout">
						{/*{this.props.content.tumblrLink &&
						<Link href={this.props.content.tumblrLink}>
							<a className="social-follow__item" target="_blank">Tumblr</a>
						</Link>
						}*/}
						{this.props.content.facebookLink &&
						<Link href={this.props.content.facebookLink}>
							<a className="social-follow__item facebook" target="_blank">Facebook
							</a>
						</Link>
						}
						{this.props.content.instagramLink &&
						<Link href={this.props.content.instagramLink}>
							<a className="social-follow__item instagram" target="_blank">
								Instagram
							</a>
						</Link>
						}
						{this.props.content.vimeoLink &&
						<Link href={this.props.content.vimeoLink}>
							<a className="social-follow__item vimeo" target="_blank">
								Vimeo
							</a>
						</Link>
						}
						{this.props.content.linkedinLink &&
						<Link href={this.props.content.linkedinLink}>
							<a className="social-follow__item linkedin" target="_blank">
								Linkedin
							</a>
						</Link>
						}

					</div>

					{/*<div className="social-follow__copyright">
						@ 2021 BRUT
					</div>*/}
					{/*{this.props.content.behanceLink &&
					<Link href={this.props.content.behanceLink}>
						<a className="social-follow__item behance" target="_blank">Behance</a>
					</Link>
					}*/}
				</div>
				{/* {this.props.content.tumblrLink || this.props.content.facebookLink ||
				this.props.content.instagramLink || this.props.content.vimeoLink
				|| this.props.content.linkedinLink || this.props.content.behanceLink &&
				} */}
			</React.Fragment>
		)
	}
}
