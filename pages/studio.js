import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Constant from '../components/Constant'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import Image from '../components/Image'

import BlockListProjectsTags from '../components/blocks/BlockListProjectsTags'
import ScrollAnimation from 'react-animate-on-scroll'
import Reveal from 'react-reveal/Reveal'

export default class Studio extends Component {
	state = {
		isReady: false
	}

	/*
    * Begin animation when component is mount
    */
	componentDidMount = () => {
		this.setState({isReady: !this.state.isReady})
	}
	/*
    * Transition off trigered by Link component
    */
	onClickDo = () => {
		this.setState({isReady: !this.state.isReady})
	}
	/*
    * Transition on
    */
	isEntering = () => {
		return {
			opacity: 1,
			translateY: spring(0, {stiffness: 120, damping: 17}),
		}
	}
	/*
    * Transition off
    */
	isLeaving = () => {
		return {
			opacity: 0,
			translateY: 50,
		}
	}

	render = () => {
		// JSX
		return (
			<Layout content={this.props.studio.data[0]}  footer={this.props.footer}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()}
				>
					{
						// If state = true, display content
						this.state.isReady &&
						<div key="title" className="template-3">
							<div className="header-2__container studio" style={{ backgroundColor: this.props.studio.data[0].color.color }}>

								{this.props.studio.data[0].image &&
								<Image content={this.props.studio.data[0].image} width="100%" ></Image>
								}

								<div className="header-2__container-content">
									{this.props.studio.data[0].headline &&
									<Reveal effect="fadeInUp">
										<h1 className="header-2__container-content-title"
											dangerouslySetInnerHTML={{__html: this.props.studio.data[0].headline}}></h1>
									</Reveal>
									}
								</div>
							</div>

							{/*{this.props.studio.data[0].blocks[0].type === 'blockListProjects' &&
								<BlockListProjectsTags content={this.props.studio.data[0].blocks[0]} />
							}*/}


							<div className="header-2__container--description">
								{this.props.studio.data[0].description &&
								<Reveal effect="fadeInUpText" duration={1000}>
									<div className="fade-up header-2_container-content-description"
										 dangerouslySetInnerHTML={{__html: this.props.studio.data[0].description}}></div>
								</Reveal>
								}

								{(this.props.studio.data[0].facebookLink ||
									this.props.studio.data[0].instagramLink ||
									this.props.studio.data[0].behanceLink ||
									this.props.studio.data[0].vimeoLink ||
									this.props.studio.data[0].linkedinLink) &&
								<Reveal effect="fadeInUpText" duration={1000}>
									<SocialLinks content={this.props.content}></SocialLinks>
								</Reveal>
								}

							</div>
							{this.props.studio.data[0].blocks &&
							<Blocks content={this.props.studio.data[0].blocks} />
							}

						</div>
					}
				</Transition>
			</Layout>
		)
	}
}

Studio.getInitialProps = async () => {
	const studio = await fetch(Constant.api_url + 'api/pages/studio.json')
	const studioData = await studio.json()

	const footer = await fetch(Constant.api_url + 'api/globals.json')
	const footerData = await footer.json()

	return {
		footer: footerData,
		studio: studioData
	}
}
