import Image from '../Image.js'
import LinkItem from './LinkItem.js'
import Reveal from 'react-reveal/Reveal'

const BlockBigItem = (props) => (

    <div className="block-big-item__container">

		<div className="block-big-item__image-container">
			<LinkItem content={props.content}>
				<a>
					<Reveal effect="fadeInUp">
						<Image content={props.content.image[0]} width="100%"/>
					</Reveal>
				</a>
			</LinkItem>{/*
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
				<Image content={props.content.image[0]} width="100%"/>
			</ScrollAnimation>*/}
		</div>
        <div className="block-big-item__content-container">
			<Reveal effect="fadeInUp">
				<h3 className="general__link-title">
					<LinkItem content={props.content}>
						<a>
							<div dangerouslySetInnerHTML={{__html: props.content.headline}}></div>
						</a>
					</LinkItem>
				</h3>
			</Reveal>

			<Reveal effect="fadeInUpText" duration={1000}>
				<div className="general__text">
					{props.content.subtitle}
				</div>
			</Reveal>
        </div>

    </div>
);

export default BlockBigItem;
