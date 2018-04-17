import React, { Component } from 'react'
import fetch from 'isomorphic-unfetch'
import Constant from '../components/Constant'
import { spring } from 'react-motion'
import Transition from 'react-motion-ui-pack'
import Layout from '../components/Layout'
import Blocks from '../components/Blocks'
/*import DirectorsPage from './directorsPage'
import DirectorsItem from './directorsItem'*/


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
			<Layout content={this.props.directors.data[0]}>
				<Transition
					component={false}
					enter={this.isEntering()}
					leave={this.isLeaving()} >
					{this.state.isReady &&
						<div key="title" className="header-2__container fullScreen" style={{ backgroundColor: this.props.directors.data[0].color.color }}>
							{this.props.directors.data[0].blocks &&
							<Blocks content={this.props.directors.data[0].blocks}/>
							}
						</div>
					}
				</Transition>
			</Layout>
		)
	}
}

Directors.getInitialProps = async (context) => {

	const directors = await fetch(Constant.api_url + 'api/pages/directors_page.json')
	const directorsData = await directors.json()

	const response = {
		directors: directorsData
	}

	/*if (id == undefined) {
	} else {
		const directors = await fetch(Constant.api_url + `api/directors/${id}.json`)
		const directorsData = await directors.json()
		const meta = directorsData

		response = {
			directorsItem: directorsData,
			meta: meta
		}
	}*/

	return response

}
