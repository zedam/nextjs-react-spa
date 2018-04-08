import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Constant from '../components/Constant'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import BackgroundImage from '../components/BackgroundImage'
import ScrollAnimation from 'react-animate-on-scroll'

export default class News extends Component {
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
			<Layout content={this.props.news}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()} >
					{
						// If state = true, display content
						this.state.isReady &&
					<div key="title" className="template-1">

						<div className="header-3__video-container">

							{this.props.news.image &&
							<BackgroundImage content={this.props.news.image[0]} width="100%" ></BackgroundImage>
							}

						</div>


						<div className="header-1__container-content">
							{this.props.news.headline &&
							<h1 className="header-3__container-content-title"
								dangerouslySetInnerHTML={{__html: this.props.news.headline}}>
							</h1>
							}

							<ScrollAnimation animateIn="fadeIn">

								{this.props.news.description &&
								<div className="fade-up header-3__container-content-description"
									 dangerouslySetInnerHTML={{__html: this.props.news.description}}></div>
								}
							</ScrollAnimation>
						</div>


						{this.props.news.blocks &&
						<Blocks content={this.props.news.blocks}/>
						}

					</div>
					}
				</Transition>
			</Layout>
		)
	}
}

News.getInitialProps = async (context) => {
	const { id } = context.query;
	const news = await fetch(`${Constant.api_url}api/news/${id}.json`)
	const newsData = await news.json()

	return {
		news: newsData
	}
}
