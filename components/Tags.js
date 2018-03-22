const Tags = (props) => (
    <div>
        {props.content.map((tag, i) => (
            <div key={i}>
                {tag.title}
            </div>
        ))}
    </div>
);

export default Tags;