import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import Image from '../components/BackgroundImage'
import Vimeo from 'react-vimeo'
import SocialShare from '../components/SocialShare'
import SocialLinks from '../components/SocialLinks'
import Constant from '../components/Constant'
import { DefaultPlayer as Video } from 'react-html5video'
import Reveal from 'react-reveal/Reveal'
import axios from 'axios'
import NextLink from '../components/blocks/NextLink'
import Link from 'next/link'
import { Carousel } from 'react-responsive-carousel'

let changedContent = false;

export default class Projects extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showContent: true,
			showVideo: true,
			isReady: false,
			isPlaying: false
		}
	}

	updateLink = () => {
		document.getElementById('template2').style.opacity = 0;

		this.setState({
			showVideo: false
		});
	}

	customFunctionCallOverview = (id) => {
		fetch(Constant.api_url + 'api/' + 'directors/' + id + '.json')
	}

	customFunctionCall = (id) => {
		changedContent = true;
		fetch(Constant.api_url + 'api/' + 'projects/' + id + '.json')
	}

	componentWillUpdate = () => {
		if (changedContent) {
			this.state.showContent = false;

			this.state.showContent = true;
			setTimeout(() => {
				this.setState({
					showVideo: true
				});
				document.getElementById('template2').classList.add('transition');
				document.getElementById('template2').style.opacity = 1;

				setTimeout(() => {
					document.getElementById('template2').classList.remove('transition');
				}, 500)
			}, 100)

			changedContent = false;
		}
	}


	/*
    * Begin animation when component is mount
    */
	componentDidMount = () => {
		//alert(this.props.project.director.contentId)
		this.setState({ isReady: !this.state.isReady })
	}
	/*
    * Transition off trigered by Link component
    */
	onClickDo = () => {
		this.setState({ isReady: !this.state.isReady })
	}
	/*
    * Transition off trigered by Link component
    */
	onPlaying = () => {
		this.setState({ isPLaying: true })
	}

	mouseMove = () => {
	}

	fetchDirector = (id) => {

        if (!window.isMobile) {
			axios.get(Constant.api_url + `api/directors/${id}.json`)
		}
	}
	/*
    * Transition on
    */
	isEntering = () => {
		return {
			opacity: 1,
			translateY: spring(0, { stiffness: 120, damping: 17 }),
		}
	}

	renderVideo = () => {
		return (

			<div className={'videoPlaying_' + this.state.isPlaying}>
				{this.props.project.vimeoUrl ?
					<div className="header-3__vimeo-container"
						onMouseEnter={() => (this.mouseMove())}
					>
						<Video loop
							controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
							onCanPlayThrough={() => {
								// Do stuff
							}}
							onPlay={() => {
								this.setState({ isPlaying: true })

								// Do stuff
							}}>
							<source src={this.props.project.vimeoUrl} type="video/mp4" />
							{/*<track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />*/}
						</Video>
					</div>
					:
					<div>
						{this.props.project.vimeoId &&
							<Vimeo videoId={this.props.project.vimeoId} background={false}
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
			<Layout content={this.props.project} footer={this.props.footer}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()} >
					{
						// If state = true, display content
						this.state.isReady &&
						<div key="title" className="header-3__container" id={"template2"}>

							<div className="header-3__video-container">

								{this.props.project.image.length > 1 && 
								<Carousel showStatus={false} emulateTouch={true} showThumbs={false} showIndicators={false} useKeyboardArrows autoPlay interval={3000} transitionTime={1050} infiniteLoop>
									{this.props.project.image.map((name, index) => {
										return (
											<React.Fragment key={index} >
												{/* <img /> */}
												<Image content={name} width="100%" ></Image>
											</React.Fragment>
										)
									})}
								</Carousel>
								}
								{this.props.project.image.length == 1 &&
									<Image content={this.props.project.image[0]} width="100%" ></Image>
								}

								{this.state.showVideo &&
									<React.Fragment>
										{this.renderVideo()}
									</React.Fragment>
								}
							</div>

							<div className="header-1__container-content">

								<Reveal effect="fadeInUp">
									<React.Fragment>

										{this.props.project.director != undefined &&
											<div className="links-navigation">

												{this.props.project.director.title == 'Studio' ?
													<Link prefetch href={'/studio'}>
														<a className="back-to"
															onMouseOver={() => this.customFunctionCallOverview(this.props.project.director.id)}
														>
															&lt; Back to {this.props.project.director.title}
														</a>
													</Link>
													:
													<Link prefetch
														as={`/directors/${this.props.project.director.slug}/${this.props.project.director.id}`}
														href={`/directors?id=${this.props.project.director.id}`}>
														<a className="back-to"
															onMouseOver={() => this.customFunctionCallOverview(this.props.project.director.id)}>
															&lt; Back to {this.props.project.director.title}
														</a>
													</Link>
												}

												{this.props.project.nextEntry &&
													<div onClick={() => this.updateLink()}>
														<Link prefetch as={`/projects/${this.props.project.nextEntry.slug}/${this.props.project.nextEntry.id}`}
															href={`/projects?id=${this.props.project.nextEntry.id}`}>

															<a className="next-to"
																onMouseOver={() => this.customFunctionCall(this.props.project.nextEntry.id)}>
																{this.props.project.nextEntry.title} >
													</a>
														</Link>
													</div>
												}
											</div>
										}

										<div className="header-1__container-content-wrapper projects">

											{this.props.project.headline &&
												<h1 className="header-3__container-content-title"
													dangerouslySetInnerHTML={{ __html: this.props.project.headline }}>
												</h1>
											}

											<div className="header-3__content-wrapper">

												{this.props.project.description &&
													<div className="fade-up header-3__container-content-description"
														dangerouslySetInnerHTML={{ __html: this.props.project.description }}></div>
												}

												<SocialShare content={this.props.project} />

											</div>
										</div>

									</React.Fragment>
								</Reveal>
							</div>

							{this.props.project.blocks &&
								<div className="no-blocks">
									<Blocks content={this.props.project.blocks} />
								</div>
							}

							<div>
								<SocialLinks content={this.props.project} entry={this.props.project.followText} />
							</div>

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

	const footer = await fetch(Constant.api_url + 'api/globals.json')
	const footerData = await footer.json()

	return {
		footer: footerData,
		project: projectData
	}
}
