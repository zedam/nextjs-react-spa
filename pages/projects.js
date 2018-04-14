import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import BackgroundImage from '../components/BackgroundImage'
import Vimeo from 'react-vimeo'
import SocialShare from '../components/SocialShare'
import Constant from '../components/Constant'
import { DefaultPlayer as Video } from 'react-html5video'
import Reveal from 'react-reveal/Reveal'

export default class Projects extends Component {
	state = {
		isReady: false,
		isPlaying: false
	}

	/*
    * Begin animation when component is mount
    */
	componentDidMount = () => {
		//alert(this.props.project.director.contentId)
		this.setState({isReady: !this.state.isReady})
	}
	/*
    * Transition off trigered by Link component
    */
	onClickDo = () => {
		this.setState({isReady: !this.state.isReady})
	}
	/*
    * Transition off trigered by Link component
    */
	onPlaying = () => {
		this.setState({isPLaying: true})
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

	renderVideo = () => {
		return (

			<div class={'videoPlaying_' + this.state.isPlaying}>
				{  this.props.project.vimeoUrl ?
					<div class="header-3__vimeo-container">
						<Video loop muted playsInline
							   controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}

							   onCanPlayThrough={() => {
								   // Do stuff
							   }}>
							<source src={this.props.project.vimeoUrl} type="video/mp4" />
							{/*<track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />*/}
						</Video>
					</div>
					:
					<div>
					{this.props.project.vimeoId &&
					<Vimeo videoId={this.props.project.vimeoId}  background={false}
						   autoplay={false} />
					}<div></div>
					</div>
				}
			</div>
		)

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
					<div key="title" className="template-2">

						<div className="header-3__video-container">
							{this.props.project.image &&
							<BackgroundImage content={this.props.project.image[0]} width="100%" ></BackgroundImage>
							}

							{this.renderVideo()}

						</div>


						<div className="header-1__container-content">

							<Reveal effect="fadeInUp">
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

									{this.props.project.director.title == 'Studio' ?
										<a href="/studio" className="back-to">&lt; Back to Studio</a>
										:
										<a href={'/directors/' + this.props.project.director.slug + '/' + this.props.project.director.contentId} className="back-to">&lt; Back to {this.props.project.director.title}</a>
									}

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
							</Reveal>
						</div>

						{this.props.project.blocks &&
						<Blocks content={this.props.project.blocks} />
						}

						{!this.props.project.blocks &&
						<div className="no-blocks"></div>
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
