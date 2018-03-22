import Image from '../Image.js'
import LinkItem from './LinkItem'

const BlockFullItem = (props) => (

    <div className="block-project-item__container">
        <div className="block-project-item__content-container">
			<div className="block-project-item__content-container-table">
				<div className="block-project-item__content-container-cell">
					<h3 className="block-project-item__content-container-title">
						<LinkItem content={props.content}>
							<a>
								{props.content.title}
							</a>
						</LinkItem>
					</h3>
					{props.content.director &&
					<div className="block-project-item__content-container-director">
						{props.content.director}
					</div>
					}
				</div>
			</div>
        </div>
		
        <div className="block-project-item__image-container">
            <LinkItem content={props.content}>
                <a>
                   <Image content={props.content.image[0]} width="100%"/>
                </a>
            </LinkItem>
        </div>
    </div>
    
);

export default BlockFullItem;
