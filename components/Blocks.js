import BlockContent from './blocks/BlockContent'
import BlockImage from './blocks/BlockImage'
import BlockVideo from './blocks/BlockVideo'
import BlockList from './blocks/BlockList'
import BlockTables from './blocks/BlockTables'
import BlockOneItem from './blocks/BlockOneItem'
import BlockListDirectors from './blocks/BlockListDirectors'
import BlockListProjects from './blocks/BlockListProjects'

const Blocks = (props) => (
	<React.Fragment>
		{props.content.map((block, i) => (
			<React.Fragment key={i}>
				{block.type == 'blockContent' &&
				<BlockContent content={block}></BlockContent>
				}

				{block.type == 'blockImage' &&
				<BlockImage content={block}></BlockImage>
				}

				{block.type == 'blockVideo' &&
				<BlockVideo content={block}></BlockVideo>
				}

				{block.type == 'blockList' &&
				<BlockList content={block}></BlockList>
				}

				{block.type == 'blockOneItem' &&
				<BlockOneItem content={block}></BlockOneItem>
				}

				{block.type == 'blockListDirectors' &&
				<BlockListDirectors content={block}></BlockListDirectors>
				}

				{block.type == 'blockListProjects' &&
				<BlockListProjects content={block}></BlockListProjects>
				}

				{block.type == 'blockTables' &&
				<BlockTables content={block}></BlockTables>
				}
			</React.Fragment>
		))}

	</React.Fragment>
)

export default Blocks
