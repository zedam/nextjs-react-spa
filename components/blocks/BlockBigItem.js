import Image from '../Image.js'
import LinkItem from './LinkItem.js'
import ScrollAnimation from 'react-animate-on-scroll'

const BlockBigItem = (props) => (

    <div className="block-news-item__container">

        <div className="block-news-item__content-container">
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <h3 className="block-news-item__title">
                <LinkItem content={props.content}>
                    <a>
                        {props.content.title}
                    </a>
                </LinkItem>
            </h3>
			</ScrollAnimation>

			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <div className="block-news-item__subtitle">
                {props.content.subtitle}
            </div>
			</ScrollAnimation>
        </div>
        <div className="block-news-item__image-container">
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
            <Image content={props.content.image[0]} width="100%"/>
			</ScrollAnimation>
        </div>

    </div>
);

export default BlockBigItem;
