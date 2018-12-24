import React, { Component } from 'react'
import Blocks from '../components/Blocks'
import Link from 'next/link'
import Tags from '../components/Tags'
import SocialLinks from '../components/SocialLinks'

import Reveal from 'react-reveal/Reveal'

export default class DirectorsItem extends Component {

	updateLink = () => {
		document.getElementById ('header3-content').style.opacity = 0;
	}

	componentWillUpdate = () => {
		setTimeout(() => {
			document.getElementById ('header3-content').style.opacity = 1;
		}, 500);
	}

	render = () => {
		// JSX
		return (

			<div key="title" className="template-1">



			</div>
		)
	}
}
