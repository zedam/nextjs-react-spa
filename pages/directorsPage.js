import React, { Component } from 'react'
import Blocks from '../components/Blocks'

export default class DirectorsPage extends Component {
	render = () => {
		// JSX
		return (

			<div className="template-1">
				<div className="header-2__container">

					<div className="header-2__container-content">
						{this.props.content.data[0].blocks &&
						<Blocks content={this.props.content.data[0].blocks}/>
						}
					</div>
				</div>
			</div>
		)
	}
}
