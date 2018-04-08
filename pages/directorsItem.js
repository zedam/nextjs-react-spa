import React, { Component } from 'react'
import Blocks from '../components/Blocks'
import Tags from '../components/Tags'
import SocialLinks from '../components/SocialLinks'
import Extend from '../components/Extend'

import Reveal from 'react-reveal/Reveal'

export default class DirectorsItem extends Component {
	render = () => {
		// JSX
		return (

			<div key="title" className="template-1">

				<div className="header-3__container" style={{backgroundColor: this.props.content.color.color }}>
					<div className="header-3__container-content">

						<Extend>

							<a href="/directors" className="menu__back">Back</a>
						</Extend>

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
						<SocialLinks content={this.props.content}></SocialLinks>
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
