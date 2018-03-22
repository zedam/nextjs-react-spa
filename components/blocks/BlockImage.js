import Image from '../Image'

const BlockImage = (props) => (
    <div className="block-image__container">
        <h4 className="block-image__title">{props.content.mainTitle}</h4>
        <div className="block-image__text" dangerouslySetInnerHTML={{__html: props.content.description }} ></div>

        <div className="block-image__image-container">
            {props.content.image.map((image,i) => (

				<Image key={i} class="block-image__item" content={image} width="100%" ></Image>

            ))}
        </div>
    </div>
);

export default BlockImage
