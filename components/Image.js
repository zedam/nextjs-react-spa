/*import { Picture } from 'react-responsive-picture';*/
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'
import LazyLoad from 'react-lazyload'
import { Transition, ReactCSSTransitionGroup } from 'react-transition-group'

const duration = 1300

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: {opacity: 0},
  entered: {opacity: 1}
}

class Image extends React.Component {
  constructor(props) {
      super(props)
  }

  render () {
    return (

      <div content={this.props.content.handle} className={this.props.class}>

        <MediaQuery query="(max-width: 767px)" >
          <img width="100%"
              src={(this.props.content != undefined) ? this.props.content.mobile : ''}/>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px) and (max-width: 1023px)">
          <img width="100%"
              src={(this.props.content != undefined) ? this.props.content.tablet : ''}/>
        </MediaQuery>
        <MediaQuery query="(min-width: 1024px) and (max-width: 1199px)">
          <img width={this.props.width}
              src={( this.props.content != undefined) ? this.props.content.desktop : ''}/>
        </MediaQuery>
        <MediaQuery query="(min-width: 1200px) and (max-width: 1600px)">
          <img width={this.props.width}
              src={(( this.props.content != undefined) ? this.props.content.desktop_big : '')}/>
        </MediaQuery>
        <MediaQuery query="(min-width: 1601px)">
          <img width={this.props.width}
              src={(( this.props.content != undefined) ? this.props.content.desktop_extra_big : '')}/>
        </MediaQuery>
        
        
        <style global jsx>{`
            .image {
                transition: opacity ${duration}ms ease-in-out;
                opacity: 0;
            }
        `}</style>
      </div>

    )
  }
}
/* 
Image.prototype = React.Component.prototype;
Image.getInitialProps = () => {
    if (typeof window === 'undefined') {
        global.window = {}
    }
};
Image.componentWillMount = () => {
    let isLoaded = false

}
Image.componentDidMount = () => {
    let isLoaded = true
};*/


export default Image
