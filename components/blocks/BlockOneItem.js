
import BlockProjectItem from '../projects/BlockProjectItem.js';
import BlockDirectorsItem from '../directors/BlockDirectorsItem.js';
import BlockNewsItem from '../news/BlockNewsItem.js';
import BlockBigItem from '../blocks/BlockBigItem.js'
import BlockSmallItem from '../blocks/BlockSmallItem.js'
import BlockFullItem  from '../blocks/BlockFullItem.js'
import BlockNewsItemSmall from '../news/BlockNewsItemSmall.js';

const BlockOneItem = (props) => (
	<React.Fragment>

        {props.content.typeElement.map((comp, i) => (
            /*Load each component in the config file in order.
            * Note that the config object could also include props
            * which could be passed in like so:
            * <Component {..config.props} />
            */

            <div key={i}>

				{props.content.size.value == 'full' &&
				<BlockFullItem content={comp}></BlockFullItem>
				}
				{props.content.size.value == 'big' &&
				<BlockBigItem content={comp}></BlockBigItem>
				}
				{props.content.size.value == 'small' &&
				<BlockSmallItem content={comp}></BlockSmallItem>
				}

            </div>


        ))}

    </React.Fragment>
);

export default BlockOneItem;
