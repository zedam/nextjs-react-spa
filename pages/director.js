import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Constant from '../components/Constant'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import Tags from '../components/Tags'
import SocialLinks from '../components/SocialLinks'
import NextDirectorLink from '../components/blocks/NextDirectorLink'
import Reveal from 'react-reveal/Reveal'


export default class Director extends Component {
	constructor(props) {
		super (props);

		this.state = {
			isReady: false,
			isPlaying: false
		}
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
			translateY: 30,
		}
	}

	callbackFunction = (a) => {
		//this.setState({isReady: false})

		console.log (a);

	}
	isLeaving = () => {
		return {
			opacity: 0,
			translateY: 50
		}
	}
	render = () => {
		// JSX
		return (
			<Layout content={this.props.director}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()} >
					{ // If state = true, display content
						this.state.isReady &&

						<div key="title" className="template-1">

							<div className="header-3__container" style={
								this.props.director.color.color &&
								{backgroundColor: this.props.director.color.color }
							}>
								<Reveal effect="fadeInUp">
									<div className="header-3__container-content">

										<div className="links-navigation">

											<a href="/directors" className="back-to">&lt; Back to Directors</a>

											<NextDirectorLink content={this.props.director.id} callbackFunction={this.callbackFunction()}></NextDirectorLink>
										</div>

										{this.props.director.title &&
										<Reveal effect="fadeInUp" >
											<h1 className="header-3__container-content-title">{this.props.director.title}</h1>
										</Reveal>
										}

										{this.props.director.subtitle &&
										<Reveal effect="fadeInUp" >
											<h2 className="header-2__container-content-title">{this.props.director.subtitle}</h2>
										</Reveal>
										}

										{this.props.director.tags &&
										<Reveal effect="fadeInUp" >
											<Tags content={this.props.director.tags} />
										</Reveal>
										}

										{this.props.director.description &&
										<Reveal effect="fadeInUp" >
											<div className="fade-up header-3__container-content-description"
												 dangerouslySetInnerHTML={{__html: this.props.director.description}}></div>
										</Reveal>
										}

										{(this.props.director.facebookLink ||
											this.props.director.instagramLink ||
											this.props.director.behanceLink ||
											this.props.director.vimeoLink ||
											this.props.director.linkedinLink) &&
										<Reveal effect="fadeInUp" >
											<SocialLinks content={this.props.director}></SocialLinks>
										</Reveal>
										}

									</div>
							</Reveal>

								</div>

							{this.props.director.blocks &&
							<Blocks content={this.props.director.blocks}/>
							}

						</div>

						/*</div>*/
					}
				</Transition>
			</Layout>
		)
	}

}

Director.getInitialProps = async (context) => {
	const { id } = context.query;

	const director = await fetch(Constant.api_url + `api/directors/${id}.json`)
	const directorData = await director.json()

	const response = {
		director: directorData
	}

	return response

}
