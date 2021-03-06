/*import { Picture } from 'react-responsive-picture';*/
import MediaQuery from 'react-responsive'
import LazyLoad from 'react-lazyload'

/*import { Transition, ReactCSSTransitionGroup } from 'react-transition-group'


const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: {opacity: 0},
  entered: {opacity: 1}
}*/

const duration = 1300

const Image = (props) => (
  <div content={props.content.handle} className={props.class}>

    <MediaQuery query="(max-width: 767px)" >
      <div className="background-image" style={ { backgroundImage: `url(${props.content.mobile})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 768px) and (max-width: 1023px)">
      <div className="background-image" style={ { backgroundImage: `url(${props.content.tablet})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 1024px) and (max-width: 1199px)">
      <div className="background-image" style={ { backgroundImage: `url(${props.content.desktop})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 1200px) and (max-width: 1599px)">
      <div className="background-image" style={ { backgroundImage: `url(${props.content.desktop_big})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 1600px)">
      <div className="background-image" style={ { backgroundImage: `url(${props.content.desktop_extra_big})` } } />
    </MediaQuery>

  </div>
)

/*Image.getInitialProps = () => {
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
