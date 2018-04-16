import Link from 'next/link';

const SocialLinks = (props) => (
    <div className="social-links__container">

		<div className="social-links__title">
			Share them
		</div>

		<Link href={'https://www.facebook.com/sharer/sharer.php?u=' + window.location.href}>
			<a className="social-links__item" target="_blank">Facebook.</a>
		</Link>

		<Link href={'https://twitter.com/home?status=' + window.location.href}>
			<a className="social-links__item" target="_blank">Twitter.</a>
		</Link>

		<Link href={'https://plus.google.com/share?url=' + window.location.href}>
			<a className="social-links__item" target="_blank">Google+.</a>
		</Link>
    </div>
);

export default SocialLinks;
