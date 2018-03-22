import React, { Component } from 'react'
import Blocks from '../components/Blocks'
import Image from '../components/Image'

export default class DirectorsItem extends Component {
	render = () => {
		// JSX
		return (

			<div key="title" className="template-1">
				<div className="">
					<div className="header-1__container">
						<div className="header-1__container-content">

							{this.props.content.headline &&
							<h1>{this.props.content.headline}</h1>
							}
							{this.props.content.subtitle &&
							<h2>{this.props.content.subtitle}</h2>
							}


							{this.props.content.description &&
							<p className="fade-up"
							   dangerouslySetInnerHTML={{__html: this.props.content.description}}></p>
							}
						</div>

						{this.props.content.image &&
						<Image content={this.props.content.image} width="100%" ></Image>
						}


					</div>

					{this.props.content.blocks &&
					<Blocks content={this.props.content.blocks}/>
					}

				</div>

			</div>
		)
	}
}
