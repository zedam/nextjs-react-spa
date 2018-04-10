import Image from '../Image.js'
import LinkItem from './LinkItem.js'
import ScrollAnimation from 'react-animate-on-scroll'
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
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <h3 className="general__link-title">
                <LinkItem content={props.content}>
                    <a>
						<div dangerouslySetInnerHTML={{__html: props.content.headline}}></div>
                    </a>
                </LinkItem>
            </h3>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <div className="general__text">
                {props.content.subtitle}
            </div>
			</ScrollAnimation>
        </div>

    </div>
);

export default BlockBigItem;
