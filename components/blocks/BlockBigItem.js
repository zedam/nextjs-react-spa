import Image from '../Image.js'
import LinkItem from './LinkItem.js'
import ScrollAnimation from 'react-animate-on-scroll'

const BlockBigItem = (props) => (

    <div className="block-big-item__container">

        <div className="block-big-item__content-container">
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <h3 className="block-big-item__title">
                <LinkItem content={props.content}>
                    <a>
						<div dangerouslySetInnerHTML={{__html: props.content.headline}}></div>
                    </a>
                </LinkItem>
            </h3>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <div className="block-big-item__subtitle">
                {props.content.subtitle}
            </div>
			</ScrollAnimation>
        </div>
        <div className="block-big-item__image-container">
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <Image content={props.content.image[0]} width="100%"/>
			</ScrollAnimation>
        </div>

    </div>
);

export default BlockBigItem;
