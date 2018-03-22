import Image from '../Image.js'
import LinkNews from './LinkNews'

const BlockNewsItemSmall = (props) => (

    <div className="block-news-item-small__container">
        <div className="block-news-item-small__image-container">
            <Image content={props.content.image[0]} width="100%"/>
        </div>

        <div className="block-news-item-small__content-container">
            <h3 className="block-news-item-small__title">
                <LinkNews content={props.content}>
                    <a>
                        {props.content.title}
                    </a>
                </LinkNews>
            </h3>
            <div className="block-news-item-small__subtitle">
                {props.content.subtitle}
            </div>

        {/*<div  className="block-news-item-small__text" dangerouslySetInnerHTML={{__html: props.content.description}}></div>
        */}
        </div>


    </div>
);

export default BlockNewsItemSmall;
