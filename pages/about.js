import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Constant from '../components/Constant'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import Image from '../components/Image'
import ScrollAnimation from 'react-animate-on-scroll'

export default class About extends Component {
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
			<Layout content={this.props.about.data[0]}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()} >
					{
						// If state = true, display content
						this.state.isReady &&
						<div key="title" className="template-1">
							<div className="header-2__container fullScreen" style={{ backgroundColor: this.props.about.data[0].color.color }}>

								{this.props.about.data[0].image &&
								<Image content={this.props.about.data[0].image} width="100%" ></Image>
								}

								<div className="header-2__container-content">


									{this.props.about.data[0].headline &&
									<h1 className="fade-up header-2__container-content-title"
										dangerouslySetInnerHTML={{__html: this.props.about.data[0].headline}}></h1>
									}

									{this.props.about.data[0].description &&
									<ScrollAnimation animateIn="fadeIn" animateOnce="true" delay="200">
										<div className="fade-up header-2_container-content-description"
										 dangerouslySetInnerHTML={{__html: this.props.about.data[0].description}}></div>
									</ScrollAnimation>
									}

								</div>
							</div>



							{this.props.about.data[0].blocks &&
							<Blocks content={this.props.about.data[0].blocks} />
							}

						</div>
					}
				</Transition>
			</Layout>
		)
	}
}

About.getInitialProps = async () => {
	const about = await fetch(Constant.api_url + 'api/pages/about.json')
	const aboutData = await about.json()

	return {
		about: aboutData
	}
}
