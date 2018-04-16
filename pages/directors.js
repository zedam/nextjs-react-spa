import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Constant from '../components/Constant'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import DirectorsPage from './directorsPage'
import DirectorsItem from './directorsItem'


export default class Directors extends Component {
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
			<Layout content={this.props.meta}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()} >
					{ // If state = true, display content
						this.state.isReady &&

						<div  key="title">
							{this.props.directors &&
							<DirectorsPage content={this.props.directors}></DirectorsPage>
							}
							{this.props.directorsItem &&
							<DirectorsItem content={this.props.directorsItem}></DirectorsItem>
							}

						</div>
					}
				</Transition>
			</Layout>
		)
	}
}

Directors.getInitialProps = async (context) => {
	const { id } = context.query;
	let response
	if (id == undefined) {
		const directors = await fetch(Constant.api_url + 'api/pages/directors_page.json')
		const directorsData = await directors.json()
		const meta = directorsData

		response = {
			directors: directorsData,
			meta: meta
		}
	} else {
		const directors = await fetch(Constant.api_url + `api/directors/${id}.json`)
		const directorsData = await directors.json()
		const meta = directorsData

		response = {
			directorsItem: directorsData,
			meta: meta
		}
	}

	return response

}
