
import BlockProjectItem from '../projects/BlockProjectItem.js';
import BlockDirectorsItem from '../directors/BlockDirectorsItem.js';
import BlockNewsItem from '../news/BlockNewsItem.js';
import LinkDirectors from "../directors/LinkDirectors";

const BlockListDirectors = (props) => (

	<div className="link-directors__container">

        {props.content.typeElement.map((comp, i) => (

            <React.Fragment key={i}>

				{comp.handle == 'directors' &&

					<LinkDirectors content={comp} position={i}>
						{comp.title}
					</LinkDirectors>

				}

            </React.Fragment>

        ))}

    </div>
);

export default BlockListDirectors;
