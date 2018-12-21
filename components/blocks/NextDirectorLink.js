import axios from 'axios'
import Constant from '../Constant'
import React, {Component} from 'react'
import Fade from 'react-reveal/Fade'
import Link from 'next/link'
import LinkDirectors from '../../components/directors/LinkDirectors'

class NextDirectorLink extends React.Component {
	constructor (props) {
		super (props);
		this.state = {
			isReady: false,
			showLink: false
		}
	}

	updateLink = () => {
		document.getElementById ('header3-content').style.opacity = 0;
		this.setState ({
			isReady: false
		})
		this.updateDirector ();

	}

	fetchNext = (id) => {
		if (this.state.nextLink == undefined) {
			axios.get (Constant.api_url + `api/directors/${id}.json`)
			this.state.nextLink = true;
		}
	}

	updateDirector = () => {

		let showNext = false

		let count = 0
		let initiaItem = ''

		axios.get (Constant.api_url + `api/pages/directors_page.json`)
			.then ((response) => {

				for (var key of response.data.data[0].blocks) {
					if (key.type == "blockListDirectors") {
						for (let item of key.typeElement) {

							if (count == 0) {
								initiaItem = item
							}

							count++

							if (showNext) {
								this.setState ({
									linkDirector: {
										id: item.id,
										slug: item.slug,
										title: item.title + ' >'
									}
								});
								showNext = false
								this.state.isReady = true
								this.state.showLink = true
								this.setState ({
									isReady: true
								})
							}

							if (item.id == this.props.content) {
								showNext = true;

								if (count == key.typeElement.length) {
									this.setState ({
										linkDirector: {
											id: initiaItem.id,
											slug: initiaItem.slug,
											title: initiaItem.title + ' >'
										}
									})
									this.state.showLink = true

									this.setState ({
										isReady: true
									})
								}
							}

						}
					}
				}
			})
	}

	componentWillUpdate = () => {
		setTimeout(() => {
			document.getElementById ('header3-content').style.opacity = 1;
		}, 500);
	}
	componentDidMount = () => {

		this.setState ({isReady: !this.state.isReady})

		this.updateDirector ()
	}

	render () {
		return (

			<React.Fragment>
				{(this.state.linkDirector && this.state.showLink) &&
				<Fade bottom>
					<div onClick={() => this.updateLink ()}>
						<Link as={`/directors/${this.state.linkDirector.slug}/${this.state.linkDirector.id}`}
							  href={`/directors?id=${this.state.linkDirector.id}`}>

							<a className="next-to">
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
