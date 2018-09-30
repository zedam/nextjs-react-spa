import Vimeo from 'react-vimeo';
import BackgroundImage from '../BackgroundImage'
import Reveal from 'react-reveal/Reveal'

const BlockVideo = (props) => (

		<Reveal effect="fadeInUp">
			<div className="header-1__container-content">
				{props.content.mainTitle &&
				<h2 className="general__title block-video__title">
					{props.content.mainTitle}
				</h2>
				}

				<div className="block-video__container">
					{props.content.image[0] &&
						<BackgroundImage content={props.content.image[0]} ></BackgroundImage>
					}
					{props.content.vimeoId &&
						<Vimeo videoId={props.content.vimeoId} autoplay={true} />
					}
				</div>

				{props.content.description &&
				<div className="block-video__description"
					 dangerouslySetInnerHTML={{__html: props.content.description }} ></div>
				}
			</div>
		</Reveal>
);

export default BlockVideo;
