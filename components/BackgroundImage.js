/*import { Picture } from 'react-responsive-picture';*/
import React, { Component } from 'react'
import MediaQuery from 'react-responsive'

class Image extends React.Component {
  constructor(props) {
      super(props)
  }

  render () {
    return (
  <div content={this.props.content.handle} className={this.props.class}>

    <MediaQuery query="(max-width: 767px)" >
      <div className="background-image" style={ { backgroundImage: `url(${this.props.content.mobile})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 768px) and (max-width: 1023px)">
      <div className="background-image" style={ { backgroundImage: `url(${this.props.content.tablet})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 1024px) and (max-width: 1199px)">
      <div className="background-image" style={ { backgroundImage: `url(${this.props.content.desktop})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 1200px) and (max-width: 1599px)">
      <div className="background-image" style={ { backgroundImage: `url(${this.props.content.desktop_big})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 1600px)">
      <div className="background-image" style={ { backgroundImage: `url(${this.props.content.desktop_extra_big})` } } />
    </MediaQuery>

  </div>
    )
  }
}
export default Image
