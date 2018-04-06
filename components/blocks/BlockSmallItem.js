import Image from '../Image.js'
import LinkItem from './LinkItem'
import ScrollAnimation from 'react-animate-on-scroll'

const BlockSmallItem = (props) => (

    <div className="block-small-item__container">
        <div className="block-small-item__image-container">
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
	            <Image content={props.content.image[0]} width="100%"/>
			</ScrollAnimation>
        </div>

        <div className="block-small-item__content-container">
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
				<h3 className="block-small-item__title">
					<LinkItem content={props.content}>
						<a>
							<div dangerouslySetInnerHTML={{__html: props.content.headline}}></div>
						</a>
					</LinkItem>
				</h3>
			</ScrollAnimation>
			<ScrollAnimation animateIn="fadeIn" animateOnce="true">
				<div className="block-small-item__subtitle">
					{props.content.subtitle}
				</div>
			</ScrollAnimation>

        </div>
    </div>
);

export default BlockSmallItem;
