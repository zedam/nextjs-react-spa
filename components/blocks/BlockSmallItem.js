import Image from '../Image.js'
import LinkItem from './LinkItem'
import Reveal from 'react-reveal/Reveal'
import ScrollAnimation from 'react-animate-on-scroll'

const BlockSmallItem = (props) => (

    <div className="block-small-item__container">
        <div className="block-small-item__image-container">
			<LinkItem content={props.content}>
				<a>
					<Reveal effect="fadeInUp">
						<Image content={props.content.image[0]} width="100%"/>
					</Reveal>
				</a>
			</LinkItem>
        </div>

        <div className="block-small-item__content-container">
			<Reveal effect="fadeInUp">

			{/*<ScrollAnimation animateIn="fadeIn" animateOnce="true">
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
			</ScrollAnimation>
			*/}	<h3 className="general__link-title">
					<LinkItem content={props.content}>
						<a>
							<div dangerouslySetInnerHTML={{__html: props.content.headline}}></div>
						</a>
					</LinkItem>
				</h3>
			</Reveal>
			<Reveal effect="fadeInUp" delay={200}>
				<div className="general__text">
					{props.content.subtitle}
				</div>
			</Reveal>

        </div>
    </div>
);

export default BlockSmallItem;
