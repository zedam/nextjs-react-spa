/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable no-tabs */
import React, { Component } from 'react'
// import Link from './link'
import Link from 'next/link'
import Menu from 'react-burger-menu/lib/menus/slide'
import Constant from './Constant'
// import { slide as Menu } from 'react-burger-menu'
import '../static/sass/main.scss'

const isMenuOpen = function (state) {
  return state.isOpen
}

const styles = {
  menuItem: {
    color: '#282828',
    fontSize: '2.15em',
  },
  bmMenuWrap: {
    background: '#000000',
  },
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '20px',
    top: '20px',
  },
  bmBurgerBars: {
    background: '#000000',
    borderRadius: '2px',
  },
  bmCrossButton: {
    height: '24px',
    width: '24px',
  },
  bmCross: {
    borderRadius: '4px',
    height: '30px',
    width: '4px',
    background: '#CCCCCC',
  },
  bmMenu: {
    backgroundColor: '#d9d9cf',
    padding: '2.5em 1.5em 0',
    fontSize: '2.15em',
  },
  bmMorphShape: {
    fill: '#373a47',
  },
  bmItemList: {
    color: '#FFFFFF',
    padding: '0.8em',
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0.9)',
  },
}

export default class extends Component {
  constructor(props) {
	super(props)
	
    this.state = {
		isActive: props.handle,
		menuOpen: false,
		isReady: false
    }
  }

	/*
    * Begin animation when component is mount
    */
  componentDidMount = () => {
    this.setState({ isReady: !this.state.isReady })
  }
	/*
    * Transition off trigered by Link component
    */
  onClickDo = () => {
    this.setState({ isReady: !this.state.isReady })
  }
	// This keeps your state in sync with the opening/closing of the menu
	// via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange = (state) => {
    fetch(`${Constant.api_url}api/` + 'pages/studio' + '.json')
    fetch(`${Constant.api_url}api/` + 'pages/directors_page' + '.json')
    this.setState({ menuOpen: state.isOpen })
  }

  hoverFetch = (url) => {
	if (!window.isMobile) {
		fetch(`${Constant.api_url}api/${url}.json`)
	}
  }
	/*
    * Transition off trigered by Link component
    */

	// This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu = () => {
    this.setState({ menuOpen: false })
  }

  render = () => {
		// JSX
    return (

      <React.Fragment>
        <a id="home" className="menu__home-logo" href="/" />
	
        <Menu
          burgerButtonClassName={'my-class'} 
          width="100%" 
          bodyClassName="black"
          className={'my-menu '}
          isOpen={this.state.menuOpen}
          onMouseOver={() => this.hoverFetch('pages/directors_page')}
          onStateChange={(state) => this.handleStateChange(state)}
        >
          <Link href="/about">
            <a>
              <div className={"menu-item " + (this.state.isActive == 'about' ? 'active' : '')}>
                <span onClick={() => this.closeMenu()} onMouseOver={() => this.hoverFetch('pages/about')}>
                  <span className="bold">About</span>
                  <span className="normal">About</span>
                </span>
              </div>
            </a>
          </Link>

          <Link href="/directors" >
            <a className={"menu-item " + (this.state.isActive == 'directors_page' ? 'active' : '')}>
              <span onClick={() => this.closeMenu()} onMouseOver={() => this.hoverFetch('pages/directors_page')} >
                <span className="bold">Talent</span>
                <span className="normal">Talent</span>
              </span>
            </a>
          </Link>
          <Link href="/studio" >
            <a className={"menu-item " + (this.state.isActive == 'studio' ? 'active' : '')}>
              <span onClick={() => this.closeMenu()} onMouseOver={() => this.hoverFetch('pages/studio')}>
                <span className="bold">Works</span>
                <span className="normal">Works</span>  
              </span>
            </a>
          </Link>
          <Link prefetch href="/contact" >
            <a className={"menu-item " + (this.state.isActive == 'contact' ? 'active' : '')}>
              <span onClick={() => this.closeMenu()} onMouseOver={() => this.hoverFetch('pages/contact')} >
                <span className="bold">Contact</span>
                <span className="normal">Contact</span>
              </span>
            </a>
          </Link>
        </Menu>

      </React.Fragment>
    )
  }
}

