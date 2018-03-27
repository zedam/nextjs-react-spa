const Tags = (props) => (
    <div className="tags__container">
        {props.content.map((tag, i) => (
            <div key={i} className="tags__item">
				#{tag.title}
            </div>
        ))}
    </div>
);

export default Tags;
