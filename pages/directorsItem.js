import React, { Component } from 'react'
import Blocks from '../components/Blocks'
import Link from 'next/link'
import Tags from '../components/Tags'
import router from 'next/router';
import SocialLinks from '../components/SocialLinks'

import Vimeo from 'react-vimeo'

import { DefaultPlayer as Video } from 'react-html5video'
import SocialShare from '../components/SocialShare'
import BackgroundImage from '../components/BackgroundImage'

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


import Reveal from 'react-reveal/Reveal'
import Constant from "../components/Constant";

export default class DirectorsItem extends Component {
	constructor (props) {
		super (props);    
		this.props.content.showColor = true;

		this.state = {
			currentSlide: 0,
			autoPlay: true,
			showContent: true,
			showBackgroundColor: true,
			showVideo: true,
			isReady: false,
			isPlaying: true,
			backgroundColor: this.props.content.color != '' ? this.props.content.color.color : '#ffffff'
		}

	}

	updateLink = () => {
		this.props.content.blocks = [];
		this.props.content.vimeoId = false;
		this.props.content.vimeoUrl = false;
		this.props.content.showColor = false;
		this.state.showBackgroundColor = false;
		this.state.showVideo = false;
		document.getElementById ('template-1').style.opacity = 0;
	}

	componentDidUpdate = (prevProps) => {
		if (this.props.content.id !== prevProps.content.id) {
			this.setState({
				showContent: true,
				showVideo: true,
				showBackgroundColor: true
			});
		} 
	}

	componentWillUpdate = () => {
		
		setTimeout(() => {
			document.getElementById ('template-1').style.opacity = 1;

			setTimeout(() => {
				document.getElementById ('template-1').classList.remove('transition');
			}, 500)

		}, 500)
	}

	customFunctionCall = (id) => {
		fetch(Constant.api_url + 'api/' + 'directors/' + id + '.json')
	}

	customFunctionCallOverview = () => {
		fetch(Constant.api_url + 'api/pages/directors_page.json')
	}
	/*
    * Transition off trigered by Link component
    */
	onPlaying = () => {
		this.setState({ isPLaying: true })
	}

	mouseMove = () => {
	}

	renderVideo = () => {

		return (
			
			<div className={'videoPlaying_' + this.state.isPlaying}>
				<React.Fragment>
					{this.props.content.vimeoId || this.props.content.vimeoUrl &&
					<React.Fragment>
						{this.props.content.vimeoUrl ?
							<div className="header-3__vimeo-container"
								onMouseEnter={() => (this.mouseMove())}
							>
								<Video 
									controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
									onCanPlayThrough={() => {
										// Do stuff
									}}
									onPlay={() => {
										this.setState({ isPlaying: true })

										// Do stuff
									}} 
									loop autoPlay playsInline 
								>
									<source src={this.props.content.vimeoUrl} type="video/mp4" />
								</Video>
							</div>
							:
							<React.Fragment>
								{this.props.content.vimeoId &&
									<Vimeo videoId={this.props.content.vimeoId} background={false}
										autoplay={false} />
								}<div></div>
							</React.Fragment>
						}

					</React.Fragment>
					}
					<React.Fragment>
						{this.props.content.image &&
							<React.Fragment>
								{this.props.content.image.length == 1 ?
									<BackgroundImage content={this.props.content.image[0]} width="100%" ></BackgroundImage>
								:
								<Carousel 
									autoPlay={this.state.autoPlay}
									infiniteLoop={true}
									showStatus={false}
									showThumbs={false}>
									{this.props.content.image.map ((index, item) => (
										<div key={item} className="header-1__carrousel">
											<BackgroundImage content={index} width="100%" ></BackgroundImage>
										</div>
									))}
								</Carousel>
								}
							</React.Fragment>
						}
					</React.Fragment>
					
				</React.Fragment>
				
			</div>
		)

	}

	render = () => {

		return (

			<div key="title" className="template-1" id={'template-1'} >
							 {this.state.showBackgroundColor == true &&
							 <div className="template-1__background"
							 style={{backgroundColor: this.props.content.color != '' ? this.props.content.color.color : '#FFFFFF' }}></div>
							 }
				<div className="header-3__video-container">
					{this.state.showVideo &&
						<React.Fragment>
							{this.renderVideo()}
						</React.Fragment>
					}
				</div>

				{this.state.showContent &&
				<React.Fragment>
					<div className="header-3__container" id={"header3-content"}>
						<div className="header-1__container-content">
							<div className="links-navigation">
								<Link prefetch href="/directors">
									<a className="back-to"
									   onMouseOver={() => this.customFunctionCallOverview ()}>
										&lt; Back to Directors
									</a>
								</Link>

								{this.props.content.nextEntry &&
								<div onClick={() => this.updateLink ()}>
									<Link prefetch
										  as={`/directors/${this.props.content.nextEntry.slug}/${this.props.content.nextEntry.id}`}
										  href={`/directors?id=${this.props.content.nextEntry.id}`}
									>

										<a className="next-to"
										   onMouseOver={() => this.customFunctionCall (this.props.content.nextEntry.id)}>
											{this.props.content.nextEntry.title} >
										</a>
									</Link>
								</div>
								}
							</div>

							<div className="header-1__container-content-wrapper ">

								{this.props.content.title &&
								<Reveal effect="fadeInUp">
									<h1 className="header-3__container-content-title">{this.props.content.title}</h1>
								</Reveal>
								}

								{this.props.content.subtitle &&
								<Reveal effect="fadeInUp">
									<h2 className="header-2__container-content-title">{this.props.content.subtitle}</h2>
								</Reveal>
								}

								{/* {this.props.content.tags &&
								<Reveal effect="fadeInUp">
									<Tags content={this.props.content.tags}/>
								</Reveal>
								} */}

								{this.props.content.description &&
								<Reveal effect="fadeInUp">
									<div className="fade-up header-3__container-content-description"
										dangerouslySetInnerHTML={{__html: this.props.content.description}}></div>
								</Reveal>
								}

								{(this.props.content.facebookLink ||
									this.props.content.instagramLink ||
									this.props.content.behanceLink ||
									this.props.content.vimeoLink ||
									this.props.content.linkedinLink) &&
								<Reveal effect="fadeInUp">
									<SocialShare content={this.props.content}></SocialShare>
								</Reveal>
								}

							</div>

						</div>

					</div>

					{this.props.content.blocks &&
					<Blocks content={this.props.content.blocks}/>
					}


					<div>
						<SocialLinks content={this.props.content} entry={this.props.content.followText} />
					</div>
				</React.Fragment>
				}
			</div>
		)
	}
}
