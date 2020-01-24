import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Constant from '../components/Constant'
//import ScrollAnimation from 'react-animate-on-scroll'
import MediaQuery from 'react-responsive'
import Blocks from '../components/Blocks'
import BackgroundImage from '../components/BackgroundImage'
import { DefaultPlayer as Video } from 'react-html5video'
import Reveal from 'react-reveal/Reveal'


//import 'react-html5video/dist/styles.css';

export default class Homepage extends Component {
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
			<Layout content={this.props.homepage.data[0]}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()} >
					{
						// If state = true, display content
						this.state.isReady &&
					<div key="title" className="template-1">

						<div className="header-1__container">

							{this.props.homepage.data[0].image &&
							<BackgroundImage content={this.props.homepage.data[0].image[0]} width="100%" ></BackgroundImage>
							}

							<div className="header-1__video-container">
								<MediaQuery query="(max-width: 767px)" >
									<Video autoPlay loop muted playsInline
										controls={[]}
										poster="http://sourceposter.jpg"
										onCanPlayThrough={() => {
										   // Do stuff
   									}}>
										<source src="static/videos/homepage/DEC18_WEB_VIDEO-Mobile.mp4" type="video/mp4" />
										{/*<source src="static/videos/homepage/thebrut_reel.webm" type="video/webm" />*/}
										{/*<track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />*/}
									</Video>
								</MediaQuery>
								<MediaQuery query="(min-width: 768px)" >
									<Video autoPlay loop muted playsInline
										   controls={[]}

										   onCanPlayThrough={() => {
											   // Do stuff
										   }}>
										<source src="static/videos/homepage/DEC18_WEB_VIDEO.mp4" type="video/mp4" />
										{/*<source src="static/videos/homepage/thebrut_reel.webm" type="video/webm" />*/}
										{/*<track label="English" kind="subtitles" srcLang="en" src="http://source.vtt" default />*/}
									</Video>
								</MediaQuery>

							</div>

						</div>

						{this.props.homepage.data[0].headline &&
						<div className="header-1__container-content">
							<Reveal effect="fadeInUp">

								<h1 className="fade-up header-1__container-content-title"
								   dangerouslySetInnerHTML={{__html: this.props.homepage.data[0].headline}}></h1>
							</Reveal>
						</div>
						}

						{this.props.homepage.data[0].blocks &&
						<Blocks content={this.props.homepage.data[0].blocks}/>
						}

					</div>
					}
				</Transition>
			</Layout>
		)
	}
}


Homepage.getInitialProps = async () => {
	const homepage = await fetch(Constant.api_url + 'api/pages/homepage.json')
	const homepageData = await homepage.json()

	return {
		homepage: homepageData
	}
}
