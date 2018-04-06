
import LinkDirectors from "../directors/LinkDirectors"
import Fade from 'react-reveal/Fade'

const BlockListDirectors = (props) => (

	<div className="link-directors__container">
			<div>
        		{props.content.typeElement.map((comp, i) => (
				<Fade bottom delay={i*100} key={i}>
				<LinkDirectors key={i} content={comp} position={i}>
					<div>

						{comp.title}
					</div>
				</LinkDirectors>
				</Fade>
        		))}
			</div>
    </div>
);

export default BlockListDirectors;
