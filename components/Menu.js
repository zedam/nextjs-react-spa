import React, { Component } from 'react'
import Link from './link'
import Menu from 'react-burger-menu/lib/menus/slide'
//import { slide as Menu } from 'react-burger-menu'

import '../static/sass/main.scss'

var isMenuOpen = function (state) {
	return state.isOpen
}

var styles = {
	menuItem: {
		color: '#282828',
		fontSize: '2.15em'
	},
	bmMenuWrap: {
		background: '#000000'
	},
	bmBurgerButton: {
		position: 'fixed',
		width: '36px',
		height: '30px',
		left: '20px',
		top: '20px'
	},
	bmBurgerBars: {
		background: '#000000',
		borderRadius: '2px'
	},
	bmCrossButton: {
		height: '24px',
		width: '24px'
	},
	bmCross: {
		borderRadius: '4px',
		height: '30px',
		width: '4px',
		background: '#CCCCCC'
	},
	bmMenu: {
		backgroundColor: '#d9d9cf',
		padding: '2.5em 1.5em 0',
		fontSize: '2.15em'
	},
	bmMorphShape: {
		fill: '#373a47'
	},
	bmItemList: {
		color: '#FFFFFF',
		padding: '0.8em'
	},
	bmOverlay: {
		background: 'rgba(0, 0, 0, 0.9)'
	}
}

export default class extends Component {
	constructor (props) {
		super(props)
		this.state = {
			menuOpen: false,
			isReady: false
		}
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
	// This keeps your state in sync with the opening/closing of the menu
	// via the default means, e.g. clicking the X, pressing the ESC key etc.
	handleStateChange = (state) => {
		this.setState({menuOpen: state.isOpen})
	}

	/*
    * Transition off trigered by Link component
    */

	// This can be used to close the menu, e.g. when a user clicks a menu item
	closeMenu = () => {
		this.setState({menuOpen: false})
	}

	render = () => {
		// JSX
		return (

			<div>
				<a id="home" className="menu__home-logo" href="/"></a>

				<Menu  width="100%" bodyClassName="black"
					  className={ "my-menu " }
					  isOpen={this.state.menuOpen}
					  onStateChange={(state) => this.handleStateChange(state)}>
					<a id="home" onClick={() => this.closeMenu()} className="menu-item" href="/">Home</a>
					<a id="about" onClick={() => this.closeMenu()} className="menu-item" href="/about">About</a>
					<a id="studio" className="menu-item" href="/studio">Studio</a>
					<a id="directors" className="menu-item" href="/directors">Directors</a>
					<a id="contact" className="menu-item" href="/contact">Contact</a>
					{/*<a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>*/}
				</Menu>


			</div>
		)
	}
}

