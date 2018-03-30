import React, { Component } from 'react'
import Blocks from '../components/Blocks'
import Tags from '../components/Tags'
import SocialLinks from '../components/SocialLinks'

export default class DirectorsItem extends Component {
	render = () => {
		// JSX
		return (

			<div key="title" className="template-1">

				<div className="header-3__container directors" style={{backgroundColor: this.props.content.color.color }}>
					<div className="header-3__container-content">

						{this.props.content.title &&
						<h1 className="header-3__container-content-title">{this.props.content.title}</h1>
						}
						{this.props.content.subtitle &&
						<h2 className="header-2__container-content-title">{this.props.content.subtitle}</h2>
						}


						{this.props.content.tags &&
						<Tags content={this.props.content.tags} />
						}


						{this.props.content.description &&
						<div className="fade-up header-3__container-content-description"
						   dangerouslySetInnerHTML={{__html: this.props.content.description}}></div>
						}

						{this.props.content.facebookLink &&
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
