import Fade from 'react-reveal/Fade'

const Tags = (props) => (
    <div className="tags__container">
        {props.content.map((tag, i) => (
            <div key={i} className="tags__item">
				<Fade bottom >
					<div>
					#{tag.title}
					</div>
				</Fade>
            </div>
        ))}
    </div>
);

export default Tags;
