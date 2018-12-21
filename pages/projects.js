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
import axios from 'axios'
import NextLink from '../components/blocks/NextLink'
import Link from 'next/link'

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isReady: false,
			isPlaying: false
		}
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

    mouseMove = () => {
	}

	fetchDirector = (id) => {
		console.log (id)
		axios.get(Constant.api_url + `api/directors/${id}.json`)
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

			<div className={'videoPlaying_' + this.state.isPlaying}>
				{  this.props.project.vimeoUrl ?
					<div className="header-3__vimeo-container"
						 onMouseEnter={() => (this.mouseMove())}
					>
						<Video loop
							   controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
							   onCanPlayThrough={() => {
								   // Do stuff
							   }}
							   onPlay={() => {
								   this.setState({isPlaying: true})

								   console.log (this.state);
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
								<React.Fragment>

									{/*<video id="video-player_html5_api" className="vjs-tech" preload="auto" autoPlay="">
										<source src="https://player.vimeo.com/external/204993557.hd.mp4?s=50f996f537eeb601bce5674e1726e9bb2ac501da&profile_id=119"
												type="video/mp4">
										</source>
										<source src="http://player.vimeo.com/video/240758622/config"
												type="video/mp4">
										</source>
										<p className="vjs-no-js"></p>
									</video>*/}

									{this.props.project.director != undefined &&
										<div className="links-navigation">


											{this.props.project.director.title == 'Studio' ?
												<Link prefetch href={'/studio'}>
													<a className="back-to">
													&lt; Back to {this.props.project.director.title}
													</a>
													</Link>
												:
												<Link prefetch
													  as={`/directors/${this.props.project.director.slug}/${this.props.project.director.id}`}
													  href={`/directors?id=${this.props.project.director.id}`}>
													<a className="back-to">
														&lt; Back to {this.props.project.director.title}
													</a>
												</Link>
											}

											<NextLink director={this.props.project.director.id} projectId={this.props.project.id}></NextLink>
										</div>
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

									<SocialShare content={this.props.project} />

								</React.Fragment>
							</Reveal>
						</div>

						{this.props.project.blocks &&
						<div className="no-blocks">
						<Blocks content={this.props.project.blocks} />
						</div>
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
