
import axios from 'axios'
import Constant from '../Constant'
import Image from '../Image'
import React, { Component } from 'react'

class NextLink extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			showLink: false
		}
	}

	fetchNext = (id) => {
		axios.get(Constant.api_url + `api/projects/${id}.json`)
	}

	componentDidMount = () => {
		let showNext = false
		let linkUrl = ''
		let linkText = ''
		let count = 0
		let initiaItem = ''

		axios.get(Constant.api_url + `api/directors/${this.props.director}.json`)
			.then((response) => {
				for (var key of response.data.blocks) {
					if (key.type == "blockListProjects") {

						for (let item of key.typeElement) {

								if (count == 0) {
									initiaItem = item
								}

								count ++

								let $this = this;

								if (showNext) {
									console.log (item.image);
									this.setState({linkUrl: '/projects/'  + item.slug + '/' + item.id});
									this.setState({nextImage: item.image});
									this.setState({linkId: item.id})
									this.setState({linkText: item.headline + ' >'});
									showNext = false
									$this.state.showLink = true
								}

								if (item.id == this.props.projectId){
									showNext = true;

									if (count == key.typeElement.length) {
										console.log (initiaItem);
										console.log (initiaItem.image);
										this.setState({linkUrl: '/projects/'  + initiaItem.slug + '/' + initiaItem.id})
										this.setState({linkId: initiaItem.id})
										this.setState({linkText: initiaItem.headline + ' >'})
										this.setState({nextImage: initiaItem.image});
										$this.state.showLink = true
									}
								}

								//this.setState({showLink: true});
							//	this.setState({blocks: key.tpeElement});

						}
					}
				}
			})
	}

	render() {
		return (

		<React.Fragment >

			<a href={this.state.linkUrl}  className="next-to"onMouseOver={() => this.fetchNext(this.state.linkId)} >
				Next Project &gt;
			</a>
			{this.state.nextImage &&
				<Image content={this.state.nextImage[0]} class="hidden" ></Image>
			}
		</React.Fragment>
			)
	}
}/*

renderNextLink = (items) => {

	const $this = this
	let showNext = false
	const thisId = this.props.project.id
	let linkUrl = ''
	let linkText = ''

	items.forEach(function (block) {

		if (showNext) {
			linkUrl = '/projects/'  + block.slug + '/' + block.id
			linkText = block.headline + ' >'
			showNext = false
			$this.state.showLink = true
			console.log (linkText);
		}

		if (block.id == thisId){
			showNext = true;
		}

	});

	return (
		<React.Fragment>
			{this.state.showLink &&
			<a href={linkUrl}
			   dangerouslySetInnerHTML={{__html: linkText}}></a>
			}
		</React.Fragment>

	)
}*/

export default NextLink
