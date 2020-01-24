import Image from '../BackgroundImage'
import Reveal from 'react-reveal/Reveal'
import ScrollAnimation from 'react-animate-on-scroll'

import Masonry from 'react-masonry-component'

const masonryOptions = {
    transitionDuration: 0
};

const imagesLoadedOptions = { background: '.my-bg-image-el' }

class BlockImage extends React.Component {

    constructor(props) {
        super(props)
    }

    render () {
        const childElements = this.props.content.images.map(function(item, i){
            return (
				<Image key={i} class={'block-image__item ' + item.position.value} width="100%" content={item.item[0]} ></Image>
			)
		});
		
		return (
			<div className="block-image__container">
				<Reveal effect="fadeInUp">
					<div className="header-1__container-content">
						<h4 className="block-image__title">{this.props.content.mainTitle}</h4>
					</div>
				</Reveal>

				<div className="block-image__image-container">
					<Masonry
						className={''} // default ''
						elementType={'div'} // default 'div'
						options={masonryOptions} // default {}
						disableImagesLoaded={false} // default false
						updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
						imagesLoadedOptions={imagesLoadedOptions} // default {}
					>
						{childElements}
					</Masonry>
	
				</div>
			</div>
		);
	}
}

export default BlockImage
