import Link from 'next/link';
import Reveal from 'react-reveal/Reveal'

const SocialLinks = (props) => (
    <div className="social-links__container">

		<div className="social-links__title">
			Follow them
		</div>

		{props.content.facebookLink &&
		<Link href={props.content.facebookLink}>
			<a className="social-links__item">Fb.</a>
		</Link>
		}
		{props.content.instagramLink &&
		<Link href={props.content.instagramLink}>
			<a className="social-links__item">Ins.</a>
		</Link>
		}
		{props.content.vimeoLink &&
		<Link href={props.content.vimeoLink}>
			<a className="social-links__item">Vimeo.</a>
		</Link>
		}
		{props.content.linkedinLink &&
		<Link href={props.content.linkedinLink}>
			<a className="social-links__item">Linkedin.</a>
		</Link>
		}
		{props.content.behanceLink &&
		<Link href={props.content.behanceLink}>
			<a className="social-links__item">Behance.</a>
		</Link>
		}
    </div>
);

export default SocialLinks;
