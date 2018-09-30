import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Constant from '../components/Constant'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import Image from '../components/Image'
import Reveal from 'react-reveal/Reveal'

export default class Contact extends Component {
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
			<Layout content={this.props.contact.data[0]}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()}
				>
					{
						// If state = true, display content
						this.state.isReady &&
						<div className="header-2__container full" style={{ backgroundColor: this.props.contact.data[0].color.color }}>

							{this.props.contact.data[0].image &&
							<Image content={this.props.contact.data[0].image} width="100%" ></Image>
							}

							<div className="header-2__container-content">

								{this.props.contact.data[0].headline &&
								<Reveal effect="fadeInUp">
									<h1 className="header-2__container-content-title"
										dangerouslySetInnerHTML={{__html: this.props.contact.data[0].headline}}></h1>
								</Reveal>
								}

								{this.props.contact.data[0].description &&
								<div className=" contact__description" >

									<Reveal effect="fadeInUpText" duration={1000}>
										<div dangerouslySetInnerHTML={{__html: this.props.contact.data[0].description}}></div>
									</Reveal>

									<Reveal effect="fadeInUpText" duration={1000}>
										<div dangerouslySetInnerHTML={{__html: this.props.contact.data[0].descriptionExtra}}></div>
									</Reveal>
								</div>
								}

							</div>
						</div>

					}
				</Transition>
			</Layout>
		)
	}
}

Contact.getInitialProps = async () => {
	const contact = await fetch(Constant.api_url + 'api/pages/contact.json')
	const contactData = await contact.json()

	return {
		contact: contactData
	}
}
