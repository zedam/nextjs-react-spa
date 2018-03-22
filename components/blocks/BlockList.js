
import BlockProjectItem from '../projects/BlockProjectItem.js';
import BlockDirectorsItem from '../directors/BlockDirectorsItem.js';
import BlockNewsItem from '../news/BlockNewsItem.js';

const BlockList = (props) => (
    <div>
        <h2>{props.content.mainTitle}</h2>
        <div dangerouslySetInnerHTML={{__html: props.content.description }} ></div>

        
        {props.content.typeElement.map((comp, i) => (
            /*Load each component in the config file in order.
            * Note that the config object could also include props
            * which could be passed in like so:
            * <Component {..config.props} />
            */

            <div key={i}>
				{comp.handle == 'projects' &&
					<BlockProjectItem content={comp}></BlockProjectItem>
				}

				{comp.handle == 'directors' &&
					<BlockDirectorsItem  content={comp}></BlockDirectorsItem>
				}

				{comp.handle == 'news' &&
					<BlockNewsItem content={comp}></BlockNewsItem>
				}
            </div>
            /*
            if (Components.hasOwnProperty(comp.handle)) {
                let Component = Components[comp.handle];
                return <Component key={comp.handle} />
            }
            */

        ))}

        {/*<ul>
            {props.content.typeElement.map((block, i) => (
                <li key={i}>
                    <List{block.handle} content={block}></List{block.handle}>
                </li>
            ))}
        </ul>*/}
    </div>
);

export default BlockList;
