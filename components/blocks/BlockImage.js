import Image from '../Image'
import ScrollAnimation from 'react-animate-on-scroll'

const BlockImage = (props) => (
    <div className="block-image__container">
		<div className="header-1__container-content">
			<h4 className="block-image__title">{props.content.mainTitle}</h4>
			{/*<div className="block-image__text" dangerouslySetInnerHTML={{__html: props.content.description }} ></div>*/}
		</div>



			<div className="block-image__image-container">
				{props.content.image.map((image,i) => (

				<ScrollAnimation animateIn="fadeIn" animateOnce="true">
					<Image key={i} class="block-image__item" content={image} width="100%" ></Image>
				</ScrollAnimation>

				))}
			</div>
    </div>
);

export default BlockImage
