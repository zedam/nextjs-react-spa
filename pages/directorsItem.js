import React, { Component } from 'react'
import Blocks from '../components/Blocks'
import Link from 'next/link'
import Tags from '../components/Tags'
import SocialLinks from '../components/SocialLinks'

import Reveal from 'react-reveal/Reveal'

export default class DirectorsItem extends Component {

	updateLink = () => {
		document.getElementById ('template-1').style.opacity = 0;
	}

	componentWillUpdate = () => {
		setTimeout(() => {
			document.getElementById ('template-1').style.opacity = 1;
		}, 500);
	}

	render = () => {
		// JSX
		return (

			<div key="title" className="template-1" id={'template-1'}>

				<div className="header-3__container" id={"header3-content"} style={{backgroundColor: this.props.content.color.color }}>
					<div className="header-3__container-content">

						<div className="links-navigation">

							<Link prefetch href="/directors">
								<a className="back-to">
									&lt; Back to Directors
								</a>
							</Link>

							{this.props.content.nextEntry &&
							<div onClick={() => this.updateLink ()}>
								<Link prefetch as={`/directors/${this.props.content.nextEntry.slug}/${this.props.content.nextEntry.id}`}
									  href={`/directors?id=${this.props.content.nextEntry.id}`}>

									<a className="next-to">
										{this.props.content.nextEntry.title} >
									</a>
								</Link>
							</div>
							}
						</div>

						{this.props.content.title &&
						<Reveal effect="fadeInUp" >
							<h1 className="header-3__container-content-title">{this.props.content.title}</h1>
						</Reveal>
						}

						{this.props.content.subtitle &&
						<Reveal effect="fadeInUp" >
							<h2 className="header-2__container-content-title">{this.props.content.subtitle}</h2>
						</Reveal>
						}

						{this.props.content.tags &&
						<Reveal effect="fadeInUp" >
							<Tags content={this.props.content.tags} />
						</Reveal>
						}

						{this.props.content.description &&
						<Reveal effect="fadeInUp" >
							<div className="fade-up header-3__container-content-description"
							   dangerouslySetInnerHTML={{__html: this.props.content.description}}></div>
						</Reveal>
						}

						{(this.props.content.facebookLink ||
						this.props.content.instagramLink ||
						this.props.content.behanceLink ||
						this.props.content.vimeoLink ||
						this.props.content.linkedinLink) &&
						<Reveal effect="fadeInUp" >
							<SocialLinks content={this.props.content}></SocialLinks>
						</Reveal>
						}

					</div>

				</div>

				{this.props.content.blocks &&
				<Blocks content={this.props.content.blocks}/>
				}

			</div>
		)
	}
}
