import Image from '../Image.js'
import LinkItem from './LinkItem'
import ScrollAnimation from 'react-animate-on-scroll'

const BlockFullItem = (props) => (

    <div className="block-project-item__container">
        <div className="block-project-item__content-container">
			<div className="block-project-item__content-container-table">
				<div className="block-project-item__content-container-cell">
					<ScrollAnimation animateIn="fadeIn" animateOnce="true">
						<h3 className="block-project-item__content-container-title">
							<LinkItem content={props.content}>
								<a>
									{props.content.title}
								</a>
							</LinkItem>
						</h3>
					</ScrollAnimation>
					{props.content.director &&
					<ScrollAnimation animateIn="fadeIn" animateOnce="true">
						<div className="block-project-item__content-container-director">
							{props.content.director}
						</div>
					</ScrollAnimation>
					}
				</div>
			</div>
        </div>
		
        <div className="block-project-item__image-container">
            <LinkItem content={props.content}>
                <a>
					<ScrollAnimation animateIn="fadeIn" animateOnce="true">
                   		<Image content={props.content.image[0]} width="100%"/>
					</ScrollAnimation>
                </a>
            </LinkItem>
        </div>
    </div>
    
);

export default BlockFullItem;
