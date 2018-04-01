import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import Tables from '../components/Tables'
import Image from '../components/Image'
import BackgroundImage from '../components/BackgroundImage'
import Vimeo from 'react-vimeo';
import SocialShare from '../components/SocialShare'
import Constant from '../components/Constant'
import ScrollAnimation from 'react-animate-on-scroll'

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
							{/*{this.props.project.image &&
							<BackgroundImage content={this.props.project.image[0]} width="100%" ></BackgroundImage>
							}
							{this.props.project.image &&
								<Image content={this.props.project.image[0]} width="100%"></Image>
							}*/}

							{this.props.project.vimeoId &&
							<Vimeo videoId={this.props.project.vimeoId} autoplay={false} />
							}

						</div>


						<div className="header-1__container-content">

							{this.props.project.title &&
							<ScrollAnimation animateIn="fadeIn" animateOnce="true">
								<h1 className="header-3__container-content-title">
									{this.props.project.title}
								</h1>
							</ScrollAnimation>
							}

							{this.props.project.description &&
							<ScrollAnimation animateIn="fadeIn" animateOnce="true">
								<div className="fade-up header-3__container-content-description"
								   dangerouslySetInnerHTML={{__html: this.props.project.description}}></div>
							</ScrollAnimation>
							}

							{(this.props.project.facebookLink ||
								this.props.project.instagramLink ||
								this.props.project.linkedinLink ||
								this.props.project.behanceLink ||
								this.props.project.vimeoLink) &&
								<ScrollAnimation animateIn="fadeIn" animateOnce="true">
									<SocialShare content={this.props.project} />
								</ScrollAnimation>
							}

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
