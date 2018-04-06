
import LinkDirectors from "../directors/LinkDirectors";
import Fade from 'react-reveal/Fade'

const BlockListDirectors = (props) => (

	<div className="link-directors__container">
		<Fade bottom cascade>
			<div>
        		{props.content.typeElement.map((comp, i) => (
				<LinkDirectors key={i} content={comp} position={i}>
					<div>
						{comp.title}
					</div>
				</LinkDirectors>
        		))}
			</div>
		</Fade>
    </div>
);

export default BlockListDirectors;
