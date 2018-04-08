import BackgroundImage from '../BackgroundImage'
import Reveal from 'react-reveal/Reveal'
import ScrollAnimation from 'react-animate-on-scroll'

const BlockImage = (props) => (
    <div className="block-image__container">
		<div className="header-1__container-content">
			<h4 className="block-image__title">{props.content.mainTitle}</h4>
			{/*<div className="block-image__text" dangerouslySetInnerHTML={{__html: props.content.description }} ></div>*/}
		</div>

		<div className="block-image__image-container">
			{props.content.image.map((image,i) => (

			<Reveal effect="fadeInUp" key={i} delay={100 * i} >
				<BackgroundImage class="block-image__item" content={image} width="100%" ></BackgroundImage>
			</Reveal>

			))}
		</div>
    </div>
);

export default BlockImage
