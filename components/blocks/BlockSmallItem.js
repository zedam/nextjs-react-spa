import Image from '../Image.js'
import LinkItem from './LinkItem'
import ScrollAnimation from 'react-animate-on-scroll'

const BlockSmallItem = (props) => (

    <div className="block-news-item-small__container">
        <div className="block-news-item-small__image-container">
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
	            <Image content={props.content.image[0]} width="100%"/>
			</ScrollAnimation>
        </div>

        <div className="block-news-item-small__content-container">
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
				<h3 className="block-news-item-small__title">
					<LinkItem content={props.content}>
						<a>
							{props.content.title}
						</a>
					</LinkItem>
				</h3>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
				<div className="block-news-item-small__subtitle">
					{props.content.subtitle}
				</div>
			</ScrollAnimation>

        </div>
    </div>
);

export default BlockSmallItem;
