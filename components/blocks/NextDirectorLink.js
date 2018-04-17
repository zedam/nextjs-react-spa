
import axios from 'axios'
import Constant from '../Constant'
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'

class NextDirectorLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLink: false
		}
	}

	updateLink = () => {
		this.updateDirector();
	}

	fetchNext = (id) => {
		axios.get(Constant.api_url + `api/directors/${id}.json`)
	}

	updateDirector = () => {

		let showNext = false
		let count = 0
		let initiaItem = ''

		axios.get(Constant.api_url + `api/pages/directors_page.json`)
			.then((response) => {

				for (var key of response.data.data[0].blocks) {
					if (key.type == "blockListDirectors") {
						for (let item of key.typeElement) {

							if (count == 0) {
								initiaItem = item
							}

							count ++

							if (showNext) {
								this.setState({linkDirector: {
									id: item.id,
									slug: item.slug,
									title: item.title + ' >'
								} });
								showNext = false
								this.state.isReady = true
								this.state.showLink = true
							}

							if (item.id == this.props.content){
								showNext = true;

								if (count == key.typeElement.length) {
									this.setState({linkDirector: {
										id: initiaItem.id,
										slug: initiaItem.slug,
										title: initiaItem.title + ' >'
									}})
									this.state.showLink = true

									this.state.isReady = true
								}
							}

							this.setState({showLink: true});
							this.setState({showNext: showNext});

						}
					}
				}
			})
	}

	componentDidMount = () => {

		this.setState({isReady: !this.state.isReady})

		console.log ('componentWillMount');

		this.updateDirector()
	}

	render() {
		return (

			<React.Fragment>
				{(this.state.linkDirector && this.state.showLink) &&
					<Fade bottom>
						<div
							onClick={() => this.updateLink()}>

						<Link as={`/directors/${this.state.linkDirector.slug}/${this.state.linkDirector.id}`}
							  href={`/director?id=${this.state.linkDirector.id}`}
						>
							<a className="next-to"
							   onMouseOver={() => this.fetchNext(this.state.linkDirector.id)}>
								{this.state.linkDirector.title}
							</a>
						</Link>
						</div>
					</Fade>
				}
				{!this.state.linkDirector &&
					<div></div>
				}
			</React.Fragment>
		)
	}
}

export default NextDirectorLink
