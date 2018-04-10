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
      <img width="100%"
           src={(props.content != undefined) ? props.content.mobile : ''}/>
    </MediaQuery>
    <MediaQuery query="(min-width: 768px) and (max-width: 1023px)">
      <img width="100%"
           src={(props.content != undefined) ? props.content.tablet : ''}/>
    </MediaQuery>
    <MediaQuery query="(min-width: 1024px) and (max-width: 1199px)">
      <img width={props.width}
           src={( props.content != undefined) ? props.content.desktop : ''}/>
    </MediaQuery>
    <MediaQuery query="(min-width: 1200px) and (max-width: 1600px)">
      <img width={props.width}
           src={(( props.content != undefined) ? props.content.desktop_big : '')}/>
    </MediaQuery>
    <MediaQuery query="(min-width: 1601px)">
      <img width={props.width}
           src={(( props.content != undefined) ? props.content.desktop_extra_big : '')}/>
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
