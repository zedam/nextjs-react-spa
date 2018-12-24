import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Constant from '../components/Constant'
import Link from 'next/link'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Tags from '../components/Tags'
import SocialLinks from '../components/SocialLinks'
import Blocks from '../components/Blocks'
import Reveal from 'react-reveal/Reveal'
//import DirectorsPage from './directorsPage'
//import DirectorsItem from './directorsItem'


export default class Directorsitempage extends Component {
	state = {
		isReady: false
	}

	updateLink = () => {
		document.getElementById ('header3-content').style.opacity = 0;
	}

	componentWillUpdate = () => {
		setTimeout(() => {
			document.getElementById ('header3-content').style.opacity = 1;
		}, 500);
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
		return (
			<Layout content={this.props.meta}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()} >
					{ // If state = true, display content
						this.state.isReady &&

						<div  key="title" className="template-1">
							<div className="header-3__container" id={"header3-content"} style={{backgroundColor: this.props.directorsItem.color.color }}>
								<div className="header-3__container-content">

									<div className="links-navigation">

										<Link href="/directors">
											<a className="back-to">
												&lt; Back to Directors
											</a>
										</Link>

										{this.props.directorsItem.nextEntry &&
										<div onClick={() => this.updateLink ()}>
											<Link as={`/directors/${this.props.directorsItem.nextEntry.slug}/${this.props.directorsItem.nextEntry.id}`}
												  href={`/directors?id=${this.props.directorsItem.nextEntry.id}`}>

												<a className="next-to">
													{this.props.directorsItem.nextEntry.title} >
												</a>
											</Link>
										</div>
										}
									</div>

									{this.props.directorsItem.title &&
									<Reveal effect="fadeInUp" >
										<h1 className="header-3__container-content-title">{this.props.directorsItem.title}</h1>
									</Reveal>
									}

									{this.props.directorsItem.subtitle &&
									<Reveal effect="fadeInUp" >
										<h2 className="header-2__container-content-title">{this.props.directorsItem.subtitle}</h2>
									</Reveal>
									}

									{this.props.directorsItem.tags &&
									<Reveal effect="fadeInUp" >
										<Tags content={this.props.directorsItem.tags} />
									</Reveal>
									}

									{this.props.directorsItem.description &&
									<Reveal effect="fadeInUp" >
										<div className="fade-up header-3__container-content-description"
											 dangerouslySetInnerHTML={{__html: this.props.directorsItem.description}}></div>
									</Reveal>
									}

									{(this.props.directorsItem.facebookLink ||
										this.props.directorsItem.instagramLink ||
										this.props.directorsItem.behanceLink ||
										this.props.directorsItem.vimeoLink ||
										this.props.directorsItem.linkedinLink) &&
									<Reveal effect="fadeInUp" >
										<SocialLinks content={this.props.directorsItem}></SocialLinks>
									</Reveal>
									}

								</div>

							</div>

							{this.props.directorsItem.blocks &&
							<Blocks content={this.props.directorsItem.blocks}/>
							}
							{/*
							<DirectorsItem content={this.props.directorsItem}></DirectorsItem>*/}
						</div>
					}
				</Transition>
			</Layout>
		)
	}
}

Directorsitempage.getInitialProps = async (context) => {
	const { id } = context.query;
	let response;
	const directorsItem = await fetch(Constant.api_url + `api/directors/${id}.json`);
	const directorsData = await directorsItem.json();

	response = {
		directorsItem: directorsData,
		meta: directorsData
	};

	return response;
};
