import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Constant from '../components/Constant'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
import Tables from '../components/Tables'
import Vimeo from 'react-vimeo';
import SocialShare from '../components/SocialShare'
import Constant from '../components/Constant'

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
			<Layout>
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
							<Image content={this.props.project.image} width="100%" ></Image>
							}*/}

							<Vimeo videoId="52964094" autoplay={false} />
							{/*<div className="header-1__video-container">
							</div>*/}

						</div>


						<div className="header-1__container-content">


							{this.props.project.title &&
							<h1 className="header-3__container-content-title">{this.props.project.title}</h1>
							}
							{/*{this.props.project.title &&
							<h1>{this.props.project.title}</h1>
							}*/}
							{/*{this.props.project.subtitle &&
							<h2 className="header-3__container-content-subtitle">{this.props.project.subtitle}</h2>
							}*/}


							{this.props.project.description &&
							<div className="fade-up header-3__container-content-description"
							   dangerouslySetInnerHTML={{__html: this.props.project.description}}></div>
							}

							{(this.props.project.facebookLink ||
								this.props.project.instagramLink ||
								this.props.project.linkedinLink ||
								this.props.project.behanceLink ||
								this.props.project.vimeoLink) &&
								<SocialShare content={this.props.project}/>
							}

							{this.props.project.tables &&
								<Tables content={this.props.project.tables} />
							}
						</div>
						{/*{this.props.project.tables.map((table, i) => (
							<div key={i} className="tags__item">
								#{table.heading}<br/>
								#{table.custom}
							</div>
						))}*/}

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
