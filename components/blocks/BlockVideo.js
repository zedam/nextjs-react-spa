import Vimeo from 'react-vimeo';
import BackgroundImage from '../BackgroundImage';

const BlockVideo = (props) => (
    <React.Fragment>
		<div className="header-1__container-content">
			{props.content.vimeoId &&
			<div className="block-video__container">
				<BackgroundImage content={props.content.image[0]} ></BackgroundImage>
				<Vimeo videoId={props.content.vimeoId} autoplay={false} />
			</div>
			}

			{props.content.mainTitle &&
			<h2 className="block-video__title">
				{props.content.mainTitle}
			</h2>
			}

			{props.content.description &&
			<div className="block-video__description"
				 dangerouslySetInnerHTML={{__html: props.content.description }} ></div>
			}
		</div>
    </React.Fragment>
);

export default BlockVideo;
