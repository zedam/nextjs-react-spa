const BlockContent = (props) => (
    <div className="block-content__container">
        <h2>{props.content.mainTitle}</h2>
        <div dangerouslySetInnerHTML={{__html: props.content.description }} ></div>
    </div>
);

export default BlockContent;
