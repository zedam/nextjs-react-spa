import Vimeo from 'react-vimeo';
import BackgroundImage from '../BackgroundImage'
import Fade from 'react-reveal/Fade'

const BlockVideo = (props) => (

		<Fade bottom>
			<div className="header-1__container-content">
				{props.content.vimeoId &&
				<div className="block-video__container">
					{props.content.image[0] &&
						<BackgroundImage content={props.content.image[0]} ></BackgroundImage>
					}
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
		</Fade>
);

export default BlockVideo;
