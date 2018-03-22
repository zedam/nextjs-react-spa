
import BlockProjectItem from '../projects/BlockProjectItem.js';
import BlockDirectorsItem from '../directors/BlockDirectorsItem.js';
import BlockNewsItem from '../news/BlockNewsItem.js';
import BlockBigItem from '../blocks/BlockBigItem.js'
import BlockSmallItem from '../blocks/BlockSmallItem.js'
import BlockFullItem  from '../blocks/BlockFullItem.js'
import BlockNewsItemSmall from '../news/BlockNewsItemSmall.js';

const BlockOneItem = (props) => (
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
				{/*{comp.handle == 'projects' &&
					<BlockProjectItem content={comp}></BlockProjectItem>
				}*/}


				{props.content.size.value == 'full' &&
				<BlockFullItem content={comp}></BlockFullItem>
				}
				{props.content.size.value == 'big' &&
				<BlockBigItem content={comp}></BlockBigItem>
				}
				{props.content.size.value == 'small' &&
				<BlockSmallItem content={comp}></BlockSmallItem>
				}

				{/*{comp.handle == 'directors' &&
					<BlockDirectorsItem  content={comp}></BlockDirectorsItem>
				}*/}

				{/*{comp.handle == 'news' &&

					<div>
						{props.content.size.value == 'big' &&
							<BlockNewsItem content={comp}></BlockNewsItem>
						}

						{props.content.size.value == 'small' &&
							<BlockNewsItemSmall content={comp}></BlockNewsItemSmall>
						}
					</div>
				}*/}

            </div>


        ))}

    </div>
);

export default BlockOneItem;
