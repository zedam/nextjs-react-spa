import Image from '../Image.js'
import LinkProjects from './LinkProject'

const BlockProjectItem = (props) => (

    <div className="block-project-item__container">
        <div className="block-project-item__content-container">
			<div className="block-project-item__content-container-table">
				<div className="block-project-item__content-container-cell">
					<h3 className="block-project-item__content-container-title">
						<LinkProjects content={props.content}>
							<a>
								{props.content.title}
							</a>
						</LinkProjects>
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
            <LinkProjects content={props.content}>
                <a>
                   <Image content={props.content.image[0]} width="100%"/>
                </a>
            </LinkProjects>
        </div>
    </div>
    
);

export default BlockProjectItem;
