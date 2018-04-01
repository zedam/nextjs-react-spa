import ScrollAnimation from 'react-animate-on-scroll'

const BlockContent = (props) => (
    <div className="block-content__container">
		<ScrollAnimation animateIn="fadeIn" animateOnce="true">
        <h2>{props.content.mainTitle}</h2>
		</ScrollAnimation>

		<ScrollAnimation animateIn="fadeIn" animateOnce="true">
        <div dangerouslySetInnerHTML={{__html: props.content.description }} ></div>
		</ScrollAnimation>
    </div>
);

export default BlockContent;
