import LinkItem from "./LinkItem"
import BackgroundImage from "../BackgroundImage"
import Fade from 'react-reveal/Fade'
//import Reveal from 'react-reveal/Reveal'

const BlockListProjects = (props) => (
    <div>
        
        {props.content.typeElement.map((comp, i) => (
				<div key={i}  className="block-list-projects__item">

					<LinkItem content={comp} position={i}>
							<a>
								<div className="block-list-projects__info">
									<div className="block-list-projects__table">
			{/*<Fade effect="fadeInUp" delay={400 * i} duration="500" >*/}
										<div className="block-list-projects__cell">
											<h3 className="block-list-projects__title">
												<span
												dangerouslySetInnerHTML={{__html: comp.headline}}>
												</span>
											</h3>
											<h4 className="block-list-projects__subtitle">
												{comp.director}
											</h4>
										</div>
			{/*</Fade>*/}
									</div>
								</div>
								{comp.image[0] &&
									<BackgroundImage content={comp.image[0]} class="block-list-projects__image"></BackgroundImage>
								}
								{/*<Image content={comp.image[0]} class="block-list-projects__image"></Image>*/}
							</a>

					</LinkItem>

				</div>

        ))}

    </div>
);

export default BlockListProjects;
