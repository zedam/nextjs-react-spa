
import BlockProjectItem from '../projects/BlockProjectItem.js';
import BlockDirectorsItem from '../directors/BlockDirectorsItem.js';
import BlockNewsItem from '../news/BlockNewsItem.js';
import LinkDirectors from "../directors/LinkDirectors";

const BlockListDirectors = (props) => (
    <div>
        
        {props.content.typeElement.map((comp, i) => (

            <div key={i}>

				{comp.handle == 'directors' &&

					<LinkDirectors content={comp} position={i}>
						{comp.title}

					</LinkDirectors>

				}

            </div>
            /*
            if (Components.hasOwnProperty(comp.handle)) {
                let Component = Components[comp.handle];
                return <Component key={comp.handle} />
            }
            */

        ))}

    </div>
);

export default BlockListDirectors;
