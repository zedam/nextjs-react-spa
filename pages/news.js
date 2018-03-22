import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import Image from '../components/Image'

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
					leave={this.isLeaving()} >
					{
						// If state = true, display content
						this.state.isReady &&
					<div key="title" className="template-1">
						<div className="">
							<div className="header-1__container">
								<div className="header-1__container-content">

									{this.props.news.headline &&
									<h1>{this.props.news.headline}</h1>
									}
									{this.props.news.title &&
									<h1>{this.props.news.title}</h1>
									}
									{this.props.news.subtitle &&
									<h2>{this.props.news.subtitle}</h2>
									}


									{this.props.news.description &&
									<div className="fade-up"
									   dangerouslySetInnerHTML={{__html: this.props.news.description}}></div>
									}
								</div>

								{this.props.news.image[0] &&
								<Image content={this.props.news.image[0]} width="100%" ></Image>
								}


							</div>

							{this.props.news.blocks &&
							<Blocks content={this.props.news.blocks}/>
							}

						</div>

					</div>
					}
				</Transition>
			</Layout>
		)
	}
}

News.getInitialProps = async (context) => {
	const { id } = context.query;
	const news = await fetch(`http://craft3/api/news/${id}.json`)
	const newsData = await news.json()

	return {
		news: newsData
	}
}
