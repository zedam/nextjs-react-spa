import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import BackgroundImage from '../components/BackgroundImage'
import Vimeo from 'react-vimeo';
import SocialShare from '../components/SocialShare'
import Constant from '../components/Constant'
import ScrollAnimation from 'react-animate-on-scroll'

import Fade from 'react-reveal/Fade'
export default class Projects extends Component {
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
			translateY: 50
		}
	}
	render = () => {
		// JSX
		return (
			<Layout content={this.props.project}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()} >
					{
						// If state = true, display content
						this.state.isReady &&
					<div key="title" className="template-1">

						<div className="header-3__video-container">
							{this.props.project.image &&
							<BackgroundImage content={this.props.project.image[0]} width="100%" ></BackgroundImage>
							}
							{/*
							{this.props.project.image &&
								<Image content={this.props.project.image[0]} width="100%"></Image>
							}*/}


							{this.props.project.vimeoId &&
							<Vimeo videoId={this.props.project.vimeoId}  background={false}
								   autoplay={false}
							/>
							}

						</div>


						<div className="header-1__container-content">

							<Fade bottom cascade>
								<div>

									{/*<video id="video-player_html5_api" className="vjs-tech" preload="auto" autoPlay="">
										<source src="https://player.vimeo.com/external/204993557.hd.mp4?s=50f996f537eeb601bce5674e1726e9bb2ac501da&profile_id=119"
												type="video/mp4">
										</source>
										<source src="http://player.vimeo.com/video/240758622/config"
												type="video/mp4">
										</source>
										<p className="vjs-no-js"></p>
									</video>*/}

									{this.props.project.headline &&
										<h1 className="header-3__container-content-title"
											dangerouslySetInnerHTML={{__html: this.props.project.headline}}>
										</h1>
									}

									{this.props.project.description &&
										<div className="fade-up header-3__container-content-description"
										   dangerouslySetInnerHTML={{__html: this.props.project.description}}></div>
									}

									{(this.props.project.facebookLink ||
										this.props.project.instagramLink ||
										this.props.project.linkedinLink ||
										this.props.project.behanceLink ||
										this.props.project.vimeoLink) &&

										<SocialShare content={this.props.project} />
									}

								</div>
							</Fade>
						</div>

						{this.props.project.blocks &&
						<Blocks content={this.props.project.blocks} />
						}


					</div>
					}
				</Transition>
			</Layout>
		)
	}
}

Projects.getInitialProps = async (context) => {
	const { id } = context.query;
	const project = await fetch(Constant.api_url + `api/projects/${id}.json`)
	const projectData = await project.json()

	return {
		project: projectData
	}
}
