/*import { Picture } from 'react-responsive-picture';*/
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

const Image = (props) => (
  <div content={props.content.handle} className={props.class}>

    <MediaQuery query="(max-width: 767px)" >
      <div className="background-image" style={ { backgroundImage: `url(${props.content.mobile})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 768px) and (max-width: 1024px)">
      <div className="background-image" style={ { backgroundImage: `url(${props.content.tablet})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 1025px) and (max-width: 1200px)">
      <div className="background-image" style={ { backgroundImage: `url(${props.content.desktop})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 1201px) and (max-width: 1600px)">
      <div className="background-image" style={ { backgroundImage: `url(${props.content.desktop_big})` } } />
    </MediaQuery>
    <MediaQuery query="(min-width: 1601px)">
      <div className="background-image" style={ { backgroundImage: `url(${props.content.desktop_extra_big})` } } />
    </MediaQuery>
    {
      /*
      <MediaQuery query="(min-device-width: 0px)">

      </MediaQuery>*/
    }
    <style global jsx>{`
        .image {
            transition: opacity ${duration}ms ease-in-out;
            opacity: 0;
        }
    `}</style>
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
