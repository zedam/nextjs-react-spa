import LinkItem from "./LinkItem";
import BackgroundImage from "../BackgroundImage";
import Image from "../Image";

const BlockListProjects = (props) => (
    <div>
        
        {props.content.typeElement.map((comp, i) => (

            <div key={i} className="block-list-projects__item">

				<LinkItem content={comp} position={i}>
					<a>
						<div className="block-list-projects__info">
							<div className="block-list-projects__table">
								<div className="block-list-projects__cell">
									<h3 className="block-list-projects__title">
										{comp.title}
									</h3>
									<h3 className="block-list-projects__subtitle">
										{comp.director}
									</h3>
								</div>
							</div>
						</div>
						<BackgroundImage content={comp.image[0]} class="block-list-projects__image"></BackgroundImage>
						{/*<Image content={comp.image[0]} class="block-list-projects__image"></Image>*/}
					</a>

				</LinkItem>

            </div>

        ))}

    </div>
);

export default BlockListProjects;
