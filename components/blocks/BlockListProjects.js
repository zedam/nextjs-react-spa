import LinkItem from "./LinkItem"
import Image from "../Image"
import Reveal from 'react-reveal/Reveal'

const BlockListProjects = (props) => (
    <div>
		<Reveal effect="fadeInUp">

        {props.content.typeElement.map((comp, i) => (
			<div key={i}  className="block-list-projects__item">

				<div className="block-list-projects__anim">
					<LinkItem content={comp} position={i}>
						<a>
							<div className="block-list-projects__info">
								<div className="block-list-projects__table">
									<div className="block-list-projects__cell">
										<h3 className="block-list-projects__title">
											<span
											dangerouslySetInnerHTML={{__html: comp.headline}}>
											</span>
										</h3>
										{/*<h4 className="block-list-projects__subtitle">
											{comp.director}
										</h4>*/}
									</div>
								</div>
							</div>
							{comp.image[0] &&
								<Image content={comp.image[0]} class="block-list-projects__image"></Image>
							}
						</a>
					</LinkItem>
				</div>
			</div>
        ))}

		</Reveal>

    </div>
);

export default BlockListProjects;
