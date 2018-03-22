import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import Image from '../components/Image'

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
			<Layout>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()}
				>
					{
						// If state = true, display content
						this.state.isReady &&
						<div key="title" className="template-1">
							<div className="header-2__container about">

								{this.props.about.data[0].image &&
								<Image content={this.props.about.data[0].image} width="100%" ></Image>
								}

								<div className="header-2__container-content">

									{this.props.about.data[0].headline &&
									<h1 className="fade-up header-2__container-content-title"
										dangerouslySetInnerHTML={{__html: this.props.about.data[0].headline}}></h1>
									}

									{this.props.about.data[0].description &&
									<div className="fade-up header-2_container-content-description"
										 dangerouslySetInnerHTML={{__html: this.props.about.data[0].description}}></div>
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
	const about = await fetch('http://craft3/api/pages/about.json')
	const aboutData = await about.json()

	return {
		about: aboutData
	}
}
