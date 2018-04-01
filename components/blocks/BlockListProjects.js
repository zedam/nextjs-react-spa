import LinkItem from "./LinkItem"
import BackgroundImage from "../BackgroundImage"
import ScrollAnimation from 'react-animate-on-scroll'

const BlockListProjects = (props) => (
    <div>
        
        {props.content.typeElement.map((comp, i) => (

			<ScrollAnimation  key={i} animateIn="fadeIn" animateOnce="true"  delay={(i + 1) * 300}>
				<div  className="block-list-projects__item">

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
			</ScrollAnimation>

        ))}

    </div>
);

export default BlockListProjects;
