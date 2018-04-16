
import axios from 'axios'
import Constant from '../Constant'
import React, { Component } from 'react'
import Fade from 'react-reveal/Fade'

class NextDirectorLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLink: false
		}
	}

	componentDidMount = () => {
		let showNext = false
		let linkUrl = ''
		let linkText = ''
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
								this.setState({linkUrl: '/directors/'  + item.slug + '/' + item.id});
								this.setState({linkText: item.headline + ' >'});
								showNext = false
								$this.state.showLink = true
							}

							if (item.id == this.props.content){
								showNext = true;

								if (count == key.typeElement.length) {
									this.setState({linkUrl: '/directors/'  + initiaItem.slug + '/' + initiaItem.id})
									this.setState({linkText: initiaItem.headline + ' >'})
									this.state.showLink = true
								}
							}

							this.setState({showLink: true});
							this.setState({showNext: showNext});

						}
					}
				}
			})
	}

	render() {
		return (

			<React.Fragment>
				{this.state.linkUrl &&
					<Fade bottom>
						<a href={this.state.linkUrl} className="next-to">Next Director &gt;</a>
					</Fade>
				}
				{!this.state.linkUrl &&
					<div></div>
				}
			</React.Fragment>
		)
	}
}

export default NextDirectorLink
