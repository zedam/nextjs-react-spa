import Image from '../Image.js'
import LinkItem from './LinkItem'
import Reveal from 'react-reveal/Reveal'
import ScrollAnimation from 'react-animate-on-scroll'

const BlockFullItem = (props) => (

    <div className="block-full-item__container">

		<LinkItem content={props.content}>
			<a>
				<Reveal effect="fadeInUp">
					<div className="block-full-item__content-container">
						<div className="block-full-item__content-container-table">
							<div className="block-full-item__content-container-cell">
								<h3 className="block-full-item__content-container-title">
									<span dangerouslySetInnerHTML={{__html: props.content.headline}}>
									</span>
								</h3>
								{props.content.director &&
									<div className="block-full-item__content-container-director">
										{props.content.director}
									</div>
								}
							</div>
						</div>
					</div>

					<div className="block-full-item__image-container">
						<LinkItem content={props.content}>
							<a>
								<Image content={props.content.image[0]} width="100%"/>
							</a>
						</LinkItem>
					</div>
				</Reveal>
			</a>
		</LinkItem>
    </div>
    
);

export default BlockFullItem;
