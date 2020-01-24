import BackgroundImage from '../BackgroundImage'
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
				<BackgroundImage key={i} class={'block-image__item ' + item.position.value} content={item.item[0]} width="100%" ></BackgroundImage>
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
		{/* 
					{props.content.image.map((image,i) => (

					<Reveal effect="fadeInUp" key={i} delay={100 * i} >
						<BackgroundImage class="block-image__item" content={image} width="100%" ></BackgroundImage>
					</Reveal>

					))} */}
				</div>
			</div>
		);
	}
}

export default BlockImage
